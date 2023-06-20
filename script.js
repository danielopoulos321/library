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
    if(this.read == true){
        this.read = false;
    } else {
        this.read = true;
    }
    displayBooks();
}

const bookForm = document.getElementById('newBook');
bookForm.addEventListener("submit", function(event) {
    addBookToLibrary();
    displayBooks();
    event.preventDefault();
    modal.style.display = 'none';
    })


function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked ? true : false;
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
          <h4>By: ${myLibrary[i].author}</h4>
          <p>Pages: ${myLibrary[i].pages}</p>
          <label class="switch">
            <p>Read Status: </p>
            <input type="checkbox" class="checkbox" ${myLibrary[i].read ? 'checked':'unchecked'}>
            <div class="slider"></div>
          </label>
          <button onclick="removeBook(${i})">Remove</button>
      `;
      card.innerHTML = content;
      container.appendChild(card);
    }
  }

  function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
  }    

  let modal = document.getElementById('modal');
  let bookBtn = document.getElementById('bookBtn');
  let closeBtn = document.getElementById('close');

  bookBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', false);
  const catcher = new Book('The Catcher in the Rye', 'J.D Salinger', '1440', true);
  const nineteen84 = new Book('1984', 'George Orwell', '888', false);
myLibrary.push(theHobbit);
myLibrary.push(catcher);
myLibrary.push(nineteen84);
displayBooks();