// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;

}

// UI Constructor
function UI() { }

// Add Book To List
UI.prototype.addBooktoList = function (book) {
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');

  //Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a> </td> `;

  list.appendChild(row);

}

// Show alert
UI.prototype.showAlert = function (message, className) {

  // Create div
  const div = document.createElement('div');

  //Add classes
  div.className = `alert ${className}`;

  //Add text
  div.appendChild(document.createTextNode(message));

  //Get parent
  const container = document.querySelector('.container');

  //Get form
  const form = document.querySelector('#book-form');

  //Insert Alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

//Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}


//Event Listners for add Book
document.getElementById('book-form').addEventListener('submit',
  function (e) {

    //Get form Values
    const title = document.getElementById('title').value
    author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    console.log(ui);

    // Validate
    if (title === '' || author === '' || isbn === '') {
      //Error alert
      ui.showAlert('Please fill in all field', 'error');
    } else {
      //Add book to list
      ui.addBooktoList(book);
    }

    // Show success
    ui.showAlert('Book Added!', 'success');

    // Clear field
    ui.clearFields();

    e.preventDefault();
  });

// Event listner for delete
document.getElementById('book-list').addEventListener('click', function (e) {

  // Instantiate UI
  const ui = new UI();

  //Delete Book
  ui.deleteBook(e.target);

  //Show message
  ui.showAlert('Book Removed!', 'success');


  e.preventDefault();
})