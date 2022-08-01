const bookArr = [];
const button = document.getElementById('btn');
const title = document.getElementById('book-title');
const author = document.getElementById('author');
const bookContainer = document.getElementsByClassName('added-books');

const newDiv = document.createElement('div');
newDiv.classList.add('my-list');
bookContainer.appendChild(newDiv);
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
    form.reset();
    `
};

function removeBooks() => {
    newDiv.addEventListener('click', (e) => {
        if(e.target.classList.contains('remove')) {
            let list = e.target.parentElement;
            let Title = list.childNodes[2].value;
            let remain = bookArr.filter((book) => book.bookTitle !== bookTitle);
            localStorage.setItem('book', JSON.stringify(remain));
            newDiv.remove(list);
        }
    })
}