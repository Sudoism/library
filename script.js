let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    const library = document.querySelector(".library");
    for (let i =0; i < myLibrary.length; i++){
        const newBook = document.createElement('div');
        newBook.setAttribute("id",i)
        newBook.setAttribute("class","book")

        const title = document.createElement('div');
        title.setAttribute("class","title")
        title.textContent = myLibrary[i].title
        newBook.appendChild(title);

        const author = document.createElement('div');
        author.setAttribute("class","author")
        author.textContent = myLibrary[i].author
        newBook.appendChild(author);

        const pages = document.createElement('div');
        pages.setAttribute("class","pages")
        pages.textContent = myLibrary[i].pages
        newBook.appendChild(pages);

        const read = document.createElement('div');
        read.setAttribute("class","read")
        read.textContent = myLibrary[i].read
        newBook.appendChild(read);

        library.appendChild(newBook);
    }
}

function addNewBookInput() {
    alert("hi there");
}

const newBookButton = document.querySelector(".newBookButton")
newBookButton.addEventListener('click', () =>{
    addNewBookInput();
});

// Adding some books manually
lordOfTheRings = new Book("The lord of the rings", "J.R.R Tolkien", 299,false);
lordOfTheFlies = new Book("Lord of the Flies", "William Golding", 224,false);
dune = new Book("Dune", "Frank Herbert", 412, false);
addBookToLibrary(lordOfTheRings);
addBookToLibrary(lordOfTheFlies);
addBookToLibrary(dune);

displayLibrary();

