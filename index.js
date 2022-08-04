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
  static showBooks(bookArr) {
    const table = document.querySelector('.table');
    table.innerHTML = '';
    bookArr.forEach((book, index) => {
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
  }

  addBook(book) {
    this.collection.push(book);
    localStorage.setItem('books', JSON.stringify(this.collection));
    UI.showBooks(this.collection);
  }

  removeBook(id) {
    this.collection = this.collection.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.collection));
    UI.showBooks(this.collection);
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