const buttonOpenForm = document.getElementById('button-open-form');
const addSection = document.getElementById('add-section');
const formSection = document.getElementById('form-section');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const addBook = document.getElementById('button-add-book');
const libraryContent = document.getElementById('library-content');

const myLibrary = [];

// Show add book form
function displayForm() {
  addSection.style.display = "none";
  formSection.style.display = 'grid';

  //Reset form
  title.value = ' ';
  author.value = ' ';
  pages.value = 1;
  read.checked = false;
}

// Book Object Constructor
function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add to Library
function addToLibrary() {
  
  // Generate book id
  const newId = myLibrary.length;

  // Generate book read status 
  let readFlag = false;
  if (read.checked) {
    readFlag = true;
  }

  let newBook = new Book(newId, title.value, author.value, pages.value, readFlag)
  myLibrary.push(newBook);

  // Display book
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book-container');
  libraryContent.appendChild(bookContainer);
  
  const bookTitle = document.createElement('span');
  const bookAuthor = document.createElement('span');
  const bookPages = document.createElement('span');
  
  //const bookRead = document.createElement('span');
  const bookLabel = document.createElement('label');
  bookLabel.classList.add('switch');
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('id', `read_${newId}`);
  checkBox.setAttribute('name', 'read');
  if (read.checked) {
    checkBox.checked = true;
  }
  else {
    checkBox.checked = false;
  }
  const readSpan = document.createElement('span');
  readSpan.classList.add('slider','round');  
  bookLabel.appendChild(checkBox);
  bookLabel.appendChild(readSpan);

  const bookDelete = document.createElement('button');
  const deleteSpan = document.createElement('span');
  deleteSpan.classList.add('material-symbols-outlined');
  bookDelete.appendChild(deleteSpan);
  deleteSpan.textContent = 'delete_forever'
  deleteSpan.setAttribute('style', 'font-size: 32px; color:tomato');

  bookTitle.textContent = title.value;
  bookAuthor.textContent = author.value;
  bookPages.textContent = pages.value;


  bookTitle.classList.add('book-field', 'title');
  bookAuthor.classList.add('book-field');
  bookPages.classList.add('book-field');
  bookLabel.classList.add('book-field');
  bookDelete.classList.add('book-field', 'delete');
  bookDelete.setAttribute('id', newId);

  // Delete button function
  bookDelete.onclick = function() {

    //Remove from myLibrary
    const removeId = bookDelete.getAttribute('id');
    myLibrary.splice(removeId, 1);

    // Remove from display
    while (bookContainer.firstChild) {
      bookContainer.removeChild(bookContainer.firstChild);
    }
    libraryContent.removeChild(bookContainer);
  }

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookPages);
  bookContainer.appendChild(bookLabel);
  bookContainer.appendChild(bookDelete);
  
  // Reset page display
  formSection.style.display = 'none';
  addSection.style.display = 'grid';

}

