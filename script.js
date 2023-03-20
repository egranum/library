let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const addBookToDisplay = (book) => {
    const bookCase = document.querySelector('.books');

    let bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    const addBookInfo = (book) => {
        let bookInfo = document.createElement('p');
        bookInfo.className = 'info';
        bookInfo.textContent = book.title;
        bookDiv.appendChild(bookInfo);
    }

    addBookInfo(book);

    bookCase.appendChild(bookDiv);
}


const nameOfTheWind = new Book('The Name Of The Wind', 'Patrick Rothfuss', '662', 'read');
addBookToLibrary(nameOfTheWind);

const fellowshipOfTheRing = new Book('The Fellowship Of The Ring', 'J.R.R Tolkien', '423', 'read')
addBookToLibrary(fellowshipOfTheRing);

console.log(myLibrary)

for (const book of myLibrary) {
    addBookToDisplay(book);
}