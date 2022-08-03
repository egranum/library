let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
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