const bookArr = [];
const button = document.getElementById('btn');
const title = document.getElementById('book-title');
const author = document.getElementById('author');
const bookContainer = document.querySelector('.added-books');
const newDiv = document.createElement('div');
newDiv.classList.add('my-list');
bookContainer.appendChild(newDiv)
const form = document.getElementsByTagName('form');

const newBook = (title, author) => {
    const objectData = {
        bookTitle: title,
        bookAuthor: author
    }
    bookArr.push(objectData);
    localStorage.setItem('book', JSON.stringify(bookArr));
    newDiv.innerHTML += `<div>
    <p><strong>${objectData.bookTitle}</strong></p>
    <p><strong>${objectData.bookAuthor}</strong></p>
    <button class="remove">Remove</button>
    <hr>
    </div>
    `
    form.reset();
};
// Add new books function
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value === "" && author.value === "") {
        alert('Please fill in all the fields');
    } else {
        newBook(title.value, author.value)
    }
});
// Remove book function
const removeBooks = () => {
    newDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            let list = e.target.parentElement;
            let bookTitle = list.childNodes.value;
            let remain = bookArr.filter((book) => book.bookTitle !== bookTitle);
            localStorage.setItem('book', JSON.stringify(remain));
            newDiv.removeChild(list);
            localStorage.removeItem('list');
        }
    })
}
removeBooks();
//Function to get books from Local Storage
const getDataFromStorage = () => {
    localStorage.getItem('book')
};
getDataFromStorage();


