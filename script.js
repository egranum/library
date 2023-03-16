let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const addBookToDisplay = (book) => {
    const bookCase = document.querySelector('.books')

    let bookDiv = document.createElement('div')
    bookDiv.className = 'book'

    const addBookInfo = (book) => {
        let bookInfo = document.createElement('p')
        bookInfo.className = 'info'
        bookTitle.textContent = book.title
        bookDiv.appendChild(bookTitle)
    }

    bookCase.appendChild(bookDiv)
}

