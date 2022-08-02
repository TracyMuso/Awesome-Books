const bookArr = [];
const button = document.getElementById('btn');
const title = document.getElementById('book-title');
const author = document.getElementById('author');
const bookContainer = document.querySelector('.added-books');
const newDiv = document.createElement('div');
newDiv.classList.add('my-list');
bookContainer.appendChild(newDiv);

const newBook = (title, author) => {
  const objectData = {
    bookTitle: title,
    bookAuthor: author,
  };
  bookArr.push(objectData);
  localStorage.setItem('book', JSON.stringify(bookArr));
  newDiv.innerHTML += `<div>
    <p><strong>${objectData.bookTitle}</strong></p>
    <p><strong>${objectData.bookAuthor}</strong></p>
    <button class="remove">Remove</button>
    <hr>
    </div>
    `;
};
// Add new books function
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    alert('Please fill in all the fields');
  } else {
    newBook(title.value, author.value);
  }
});
// Remove book function
const removeBooks = () => {
  newDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      const list = e.target.parentElement;
      const bookTitle = list.childNodes.value;
      const remain = bookArr.filter((book) => book.bookTitle !== bookTitle);
      localStorage.setItem('book', JSON.stringify(remain));
      newDiv.removeChild(list);
    }
  });
};
removeBooks();
// Function to get books from Local Storage
const getDataFromStorage = () => {
  localStorage.getItem('book');
};
getDataFromStorage();
