let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages " + read;
    }
}

Book.prototype.toggleRead = function() {
    if(this.read == "Read"){
        this.read = "Not Yet Read";
    } else {
        this.read = "Read";
    }
    displayBooks();
}

const bookForm = document.getElementById('newBook');
bookForm.addEventListener("submit", function(event) {
    addBookToLibrary();
    displayBooks();
    showForm();
    event.preventDefault();
    })

function showForm(){
    if (bookForm.hasAttribute('hidden')){
        bookForm.removeAttribute('hidden');
    } else {
        bookForm.setAttribute('hidden', '');
    }
}  

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked ? "Read" : "Not Yet Read";
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    bookForm.reset();
}

function displayBooks() {
    let container = document.getElementById("container");
    container.innerHTML = "";
  
    for (let i = 0; i < myLibrary.length; i++) {
      let card = document.createElement("div");
      card.dataset.indexNumber = i;
      card.classList.add('card');
  
      let content = `
          <h2>${myLibrary[i].title}</h2>
          <h3>By ${myLibrary[i].author}</h3>
          <p>${myLibrary[i].pages} pages</p>
          <button onclick="myLibrary[${i}].toggleRead()" >${myLibrary[i].read}</button>
          <button onclick="removeBook(${i})" >Remove Book</button>
      `;
      card.innerHTML = content;
      container.appendChild(card);
    }
  }

  function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
  }    

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not Yet Read');
const bible = new Book('The Bible', 'God', '1440', 'Read');
const nineteen84 = new Book('1984', 'George Orwell', '888', 'Not Yet Read');
myLibrary.push(theHobbit);
myLibrary.push(bible);
myLibrary.push(nineteen84);
displayBooks();