// Creating library array and Book object construct
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `Title: ${title}, Author: ${author}, Number of Pages: ${pages}, Read: ${read}`;
  };
}

// Adding new Book function + initializing variables + EventListener
function addBookToLibrary(title, author, pages, read) {
  // if (title === '' || author === '' || pages === '' || read === '') {
  //   alert('Please fill out every field to add a new book');
  // } else {
  const newBook = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
  myLibrary.push(newBook);
  updateLibrary();
}
// }

const btn = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

btn.addEventListener('click', () => { addBookToLibrary(`${title.value}`, `${author.value}`, `${pages.value}`, `${read.value}`); });

// First Book
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
myLibrary.push(theHobbit);

// Show books information from library
function updateLibrary() {
  const bookshelf = document.querySelector('main');
  bookshelf.innerHTML = '';
  myLibrary.forEach((book) => {
    const item = document.createElement('div');
    item.classList.add('card');
    item.textContent = `${book.info()}`;

    const container = document.createElement('div');
    container.classList.add('container');
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = '🚮';
    remove.setAttribute('onclick', 'remove()');

    container.appendChild(remove);
    item.appendChild(container);

    bookshelf.appendChild(item);
  });
}
