let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    read ? (this.read = 'read') : (this.read = 'not read yet')

    this.info = function() {
        return `${this.title} 
        by ${this.author}, 
        ${this.pages} pages,`
    }

    this.readStatus = function() {
        return `${this.read}`
    }

    this.changeReadStatus = function() {
        return this.read === 'read' ? this.read = 'not read yet' : this.read = 'read'
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const addBookToDisplay = (book) => {
    const bookCase = document.querySelector('.books');

    let bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.dataset.entry = myLibrary.indexOf(book)

    const updateEntryIndex = () => {
        let bookDivs = bookCase.getElementsByClassName('book')
        console.log(bookDivs)
            for (const div of bookDivs) {
                let newIndex = myLibrary.findIndex(item => item.title === book.title)
                //let newIndex = myLibrary.indexOf(book)
                console.log(newIndex)
                div.dataset.entry = newIndex 
            }
    }

    const addBookInfo = (book) => {
        let bookInfo = document.createElement('p');
        bookInfo.className = 'info';
        bookInfo.textContent = book.info();
        let readInfo = document.createElement('p')
        readInfo.className = 'info';
        readInfo.classList.add('readStatus')
        readInfo.textContent = book.readStatus();
        bookDiv.appendChild(bookInfo);
        bookDiv.appendChild(readInfo);

        let changeButton = document.createElement('button');
        changeButton.className = 'changeButton'
        changeButton.textContent = 'change read status'
        changeButton.onclick = (e) => {
            book.changeReadStatus()
            readInfo.textContent = book.readStatus()
        }
        bookDiv.appendChild(changeButton)

        let removeButton = document.createElement('button')
        removeButton.className = 'removeButton'
        removeButton.textContent = 'remove book'
        bookDiv.appendChild(removeButton)
        removeButton.onclick = (e) => {
            let index = myLibrary.findIndex(e => e.title === myLibrary.title)
            let removed = myLibrary.splice(index, 1);
            console.log(myLibrary)

            removeButton.parentNode.remove()
            
            updateEntryIndex()
        }
    }

    addBookInfo(book);

    bookCase.appendChild(bookDiv);
}


const formElem = document.querySelector("form")

const showFormButton = document.querySelector('.book button')
showFormButton.addEventListener('click', (e) => {formElem.classList.toggle('hideform')})

formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let formInfo = new FormData(formElem)
    let formTitle = formInfo.get("title")
    let formAuthor = formInfo.get("author")
    let formPages = formInfo.get("pages")
    let formRead = document.querySelector("#read")
    let formReadStatus = formRead.checked
    formPages = formPages.toString()
    
    let formBook = new Book(formTitle, formAuthor, formPages, formReadStatus)
    
    addBookToLibrary(formBook)
    addBookToDisplay(formBook)
    formElem.reset()
    formElem.classList.add('hideform')
})

const nameOfTheWind = new Book('The Name Of The Wind', 'Patrick Rothfuss', '662', true);
addBookToLibrary(nameOfTheWind);

const fellowshipOfTheRing = new Book('The Fellowship Of The Ring', 'J.R.R Tolkien', '423', true)
addBookToLibrary(fellowshipOfTheRing);

console.log(myLibrary)

for (const book of myLibrary) {
    addBookToDisplay(book);
}