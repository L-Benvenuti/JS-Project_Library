// Creating library array and Book object construct
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

// Adding new Book function + EventListener
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
  myLibrary.push(newBook);
  console.log('done');
}

const btn = document.querySelector('button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

btn.addEventListener('click', () => { addBookToLibrary(`${title.value}`, `${author.value}`, `${pages.value}`, `${read.value}`); });

// First Book
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
myLibrary.push(theHobbit);
