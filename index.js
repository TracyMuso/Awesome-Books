/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}

// UI class to handle all UI events
class UI {
  static showBooks(collection) {
    const table = document.querySelector('.table');
    table.innerHTML = '';
    collection.forEach((book, index) => {
      const row = document.createElement('tr');
      const td1 = document.createElement('p');
      td1.innerHTML = `<strong>"${book.title}" by ${book.author}</strong>`;
      const td2 = document.createElement('div');
      const button = document.createElement('button');
      button.className = 'remove';
      button.innerHTML = 'Remove';
      button.addEventListener('click', () => {
        library.removeBook(book.id);
      });
      td2.appendChild(button);
      row.append(td1, td2);
      table.appendChild(row);
    });
    document.querySelector('.form').reset();
  }
}

class Library {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('books')) || [];
    this.checkLength();
  }

  checkLength() {
    const empty = document.querySelector('.empty');
    if (this.collection.length === 0) {
      empty.innerHTML = 'The library is empty';
    } else {
      empty.innerHTML = '';
    }
  }

  addBook(book) {
    this.collection.push(book);
    localStorage.setItem('books', JSON.stringify(this.collection));
    UI.showBooks(this.collection);
    this.checkLength();
  }

  removeBook(id) {
    this.collection = this.collection.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.collection));
    UI.showBooks(this.collection);
    this.checkLength();
  }
}

const library = new Library();
UI.showBooks(library.collection);
const title = document.getElementById('book-title');
const author = document.getElementById('author');
const form = document.querySelector('.form');
const error = document.querySelector('.error');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    error.innerHTML = 'Please fill in all the fields';
    setTimeout(() => {
      error.textContent = '';
    }, 3000);
  } else {
    const newBook = new Book(title.value, author.value);
    library.addBook(newBook);
  }
});

// Show date and time
window.onload = () => {
  const date = new Date();
  date.setDate(date.getDate());
  document.querySelector('.date').innerHTML = date;

  function updateTime() {
    const time = document.getElementsByClassName('date');
    const datestring = new Date().toLocaleString();
    const newString = datestring.replace(', ', ' -');
    time.textContent = newString;
  }
  setInterval(updateTime, 1000);
};

const homepage = document.querySelector('.home');
const addNew = document.querySelector('.add');
const contactpage = document.querySelector('.contact');
const homeSection = document.querySelector('#book-list');
const bookSection = document.querySelector('#Add-book');
const contactSection = document.querySelector('#contactUs');
const Clicked = false;

homepage.addEventListener('click', () => {
  if (Clicked === false) {
    homeSection.style.display = 'block';
    bookSection.style.display = 'none';
    contactSection.style.display = 'none';
  }
});

addNew.addEventListener('click', () => {
  if (Clicked === false) {
    homeSection.style.display = 'none';
    bookSection.style.display = 'block';
    contactSection.style.display = 'none';
  }
});

contactpage.addEventListener('click', () => {
  if (Clicked === false) {
    homeSection.style.display = 'none';
    bookSection.style.display = 'none';
    contactSection.style.display = 'block';
  }
});
