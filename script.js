let myLibrary = [];
const library = document.querySelector(".library");
const newBook = document.querySelector(".newBook");
const form = document.querySelector(".form");

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    toggleRead() {
        this.read = !this.read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    library.textContent = '';
    form.textContent = '';
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

        const read = document.createElement('button');
        read.setAttribute("class","read")
        if(myLibrary[i].read) {
            read.textContent = "read"
        } else {
            read.textContent = "not read"
        }
        read.setAttribute("id",i );
        read.setAttribute("onClick", "toggle(this.id)")
        newBook.appendChild(read);

        const remove = document.createElement('button');
        remove.setAttribute("id", i);
        remove.setAttribute("class","remove")
        remove.textContent="Remove";
        remove.setAttribute("onClick", "removeBook(this.id)")
        newBook.appendChild(remove);

        library.appendChild(newBook);
    }
}

function toggle(bookIndex) {
    myLibrary[bookIndex].toggleRead();
    displayLibrary();
}

function removeBook(bookIndex) {
    myLibrary.splice(bookIndex, 1);
    displayLibrary();
}

function addNewBookInput() {

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("class", "title");
    titleInput.setAttribute("placeholder", "title");
    form.appendChild(titleInput);

    const breakTitle = document.createElement("br");
    form.appendChild(breakTitle)

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "authorInput");
    authorInput.setAttribute("placeholder", "author");
    form.appendChild(authorInput);

    const breakAuthor = document.createElement("br");
    form.appendChild(breakAuthor)

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "text");
    pagesInput.setAttribute("id", "pagesInput");
    pagesInput.setAttribute("placeholder", "pages");
    form.appendChild(pagesInput);

    const breakPages = document.createElement("br");
    form.appendChild(breakPages)

    const readInput = document.createElement("input");
    readInput.setAttribute("type", "checkbox");
    readInput.setAttribute("id", "readInput");
    readInput.setAttribute("value", "readInput");
    form.appendChild(readInput)

    const readInputLabel = document.createElement("label");
    readInputLabel.setAttribute("for", "readInput");
    readInputLabel.textContent= "read";
    form.appendChild(readInputLabel);

    const breakRead = document.createElement("br");
    form.appendChild(breakRead)

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.addEventListener('click', () => {
        titleValue = document.getElementById("titleInput").value;
        authorValue = document.getElementById("authorInput").value;
        pagesValue = document.getElementById("pagesInput").value;
        readValue = document.getElementById("readInput").checked;
        var newBookObject = new Book(titleValue, authorValue, pagesValue, readValue);
        addBookToLibrary(newBookObject);
        newBookButton.disabled = false;
        displayLibrary();
    });
    form.appendChild(submit);

    //not able to bring up multiple forms for a new book
    newBookButton.disabled = true;
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