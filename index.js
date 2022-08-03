const bookArr = [];
const title = document.getElementById('book-title');
const author = document.getElementById('author');
const bookContainer = document.querySelector('.added-books');

const form = document.querySelector('.form');
// Add new book function
function newBook(bookTitle, bookAuthor) {
  const objectData = {
    bookTitle,
    bookAuthor,
  };
  bookArr.push(objectData);
  // localStorage.setItem('books', JSON.stringify(bookArr));
  const newDiv = document.createElement('div');
  newDiv.classList.add('my-list');
  bookContainer.appendChild(newDiv);
  bookArr.forEach((book, index) => {
    newDiv.innerHTML = `<div>
        <p><strong>${book.bookTitle}</strong></p>
        <p><strong>${book.bookAuthor}</strong></p>
        <button class="remove" id="${index}">Remove</button>
        <hr>
        </div>
        `;
    form.reset();
    // Button action to remove books
    const remove = newDiv.querySelector('.remove');
    remove.addEventListener('click', () => {
      bookArr.splice(index, 1);
      bookContainer.removeChild(newDiv);
      localStorage.setItem('books', JSON.stringify(bookArr));
    });
  });
  localStorage.setItem('books', JSON.stringify(bookArr));
}
// Add new books function
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    alert('Please fill in all the fields');
  } else {
    newBook(title.value, author.value);
  }
});

//  Function to get books from Local Storage

function getDataFromStorage() {
  const books = JSON.parse(localStorage.getItem('books'));
  if (books) {
    books.forEach((book) => {
      newBook(book.bookTitle, book.bookAuthor);
    });
  }
}
getDataFromStorage();
