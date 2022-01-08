let myLibrary = [];
const library = document.querySelector(".library");
const newBook = document.querySelector(".newBook");
const form = document.querySelector(".form");

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

function validateForm(){
    alert("hi");
}

function addNewBookInput() {

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("placeholder", "title");
    form.appendChild(titleInput);

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "authorInput");
    authorInput.setAttribute("placeholder", "author");
    form.appendChild(authorInput);

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "text");
    pagesInput.setAttribute("id", "pagesInput");
    pagesInput.setAttribute("placeholder", "pages");
    form.appendChild(pagesInput);

    const readInput = document.createElement("input");
    readInput.setAttribute("type", "text");
    readInput.setAttribute("id", "readInput");
    readInput.setAttribute("placeholder", "read");
    form.appendChild(readInput);

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.addEventListener('click', () => {
        test = document.getElementById("readInput").value;
        alert(test);
    });
    form.appendChild(submit);

    formPlaceholder.appendChild(form);
    
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