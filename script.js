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
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add to Library
function addToLibrary(event) {
  let newBook = new Book(title.value, author.value, pages.value, read.value)
  myLibrary.push(newBook);

  // Display book
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book-container');
  libraryContent.appendChild(bookContainer);
  
  const bookTitle = document.createElement('span');
  const bookAuthor = document.createElement('span');
  const bookPages = document.createElement('span');
  const bookRead = document.createElement('span');
  
  bookTitle.textContent = title.value;
  bookAuthor.textContent = author.value;
  bookPages.textContent = pages.value;
  bookRead.textContent = read.value;

  bookTitle.classList.add('book-field', 'title');
  bookAuthor.classList.add('book-field');
  bookPages.classList.add('book-field');
  bookRead.classList.add('book-field');

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookPages);
  bookContainer.appendChild(bookRead);
  
  // Reset page display
  formSection.style.display = 'none';
  addSection.style.display = 'grid';

}

// read.addEventListener('change', function() {
//   if (read.checked == true) {
//     console.log('checked');
//   }
//   else {
//     console.log('unchecked');
//   }
// })
