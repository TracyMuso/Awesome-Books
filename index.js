
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
    table.innerHTML = "";
    bookArr.forEach((book, index) => {
      const row = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.innerHTML = book.author;
      const td2 = document.createElement('td');
      td2.innerHTML = book.title;
      const button = document.createElement('button')
      button.className = 'remove';
      button.addEventListener('click', () => {
        library.removeBook(book.id);
      });
      td2.appendChild(button);
      row.append(td1, td2);
      table.appendChild(row);

    });
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



