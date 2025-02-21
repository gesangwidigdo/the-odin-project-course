// DIALOG
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.add-button');
const closeButton = document.querySelector('.close-button');
let editIndex = null;
showButton.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
})
// END DIALOG

// BOOK CREATE
const bookList = document.querySelector('.book-list');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const submitButton = document.querySelector('.submit');
function addBookToLibrary() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');

  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
}
submitButton.addEventListener('click', () => {
  if (editIndex !== null) {
    myLibrary[editIndex].title = title.value;
    myLibrary[editIndex].author = author.value;
    myLibrary[editIndex].pages = pages.value;
    myLibrary[editIndex].read = read.checked;
    editIndex = null;
    render();
    dialog.close();
    return;
  }
  addBookToLibrary();
  dialog.close();
  console.log(myLibrary);
  render();
  editIndex = null;
});


document.addEventListener('DOMContentLoaded', () => {
  render();
})

function render() {
  bookList.innerHTML = '';

  if (myLibrary.length === 0) {
    const noBooks = document.createElement('h2');
    noBooks.classList.add('no-books');
    noBooks.textContent = 'No books to display';
    bookList.appendChild(noBooks);
    return;
  }

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.index = index;

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    bookPages.textContent = `Pages: ${book.pages}`;

    const bookStatus = document.createElement('p');
    bookStatus.classList.add('status');
    bookStatus.textContent = `Status: ${book.read ? 'Read' : 'Unread'}`;

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const readButton = document.createElement('button');
    readButton.classList.add('read-button');
    readButton.textContent = book.read ? 'Unread' : 'Read';

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';

    bookCard.appendChild(bookInfo);
    bookInfo.appendChild(cardHeader);
    cardHeader.appendChild(bookTitle);
    bookInfo.appendChild(cardBody);
    cardBody.appendChild(bookAuthor);
    cardBody.appendChild(bookPages);
    cardBody.appendChild(bookStatus);
    bookInfo.appendChild(cardFooter);
    cardFooter.appendChild(readButton);
    cardFooter.appendChild(editButton);
    cardFooter.appendChild(deleteButton);

    bookList.appendChild(bookCard);
  });
}

// INIT FIRST 4 BOOKS
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, false);
const book3 = new Book('The Silmarillion', 'J.R.R. Tolkien', 365, false);
const book4 = new Book('The Children of Húrin', 'J.R.R. Tolkien', 313, true);
myLibrary.push(book1, book2, book3, book4);
render();
// END BOOK CREATE

// BOOK DELETE
bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-button')) {
    const index = e.target.closest('.book-card').dataset.index;
    myLibrary.splice(index, 1);
    render();
  }
})
// END BOOK DELETE

// BOOK READ/UNREAD
bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('read-button')) {
    const index = e.target.closest('.book-card').dataset.index;
    myLibrary[index].read = !myLibrary[index].read;
    render();
  }
})
// END BOOK READ/UNREAD
console.log(myLibrary);
// BOOK EDIT
bookList.addEventListener('click', (e) => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');

  if (e.target.classList.contains('edit-button')) {
    const index = e.target.closest('.book-card').dataset.index;
    const book = myLibrary[index];
    title.value = book.title;
    author.value = book.author;
    pages.value = book.pages;
    read.checked = book.read;

    dialog.showModal();

    editIndex = index;

    // submitButton.addEventListener('click', () => {
    //   myLibrary[index].title = title.value;
    //   myLibrary[index].author = author.value;
    //   myLibrary[index].pages = pages.value;
    //   myLibrary[index].read = read.checked;
    //   render();
    //   dialog.close();

    //   console.log(myLibrary);
    // });
  }
});
// END BOOK EDIT
