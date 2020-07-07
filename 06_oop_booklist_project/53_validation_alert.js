// Book Constructor
function Book (title , author , isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;

}

// UI Constructor
function UI(){}

// Add Book To List
UI.prototype.addBooktoList = function (book){
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
UI.prototype.showAlert = function(message , className){

  // Create div
  const div = document.createElement('div');

  //Add classes
  div.className =`alert ${className}`;

  //Add text
  div.appendChild(document.createTextNode(message));

  //Get parent
  const container = document.querySelector ('.container');

  const form =document.querySelector('#book-form');

  container.insertBefore (div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();}, 3000);
}

//Clear fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}

//Event Listners
document.getElementById('book-form').addEventListener ('submit',
  function (e){

    //Get form Values
    const title = document.getElementById('title').value
          author = document.getElementById('author').value,
          isbn  = document.getElementById('isbn') .value

    // Instantiate book
    const book = new Book (title , author , isbn);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if (title ==='' || author === '' || isbn === ''){
      //Error alert
      ui.showAlert ('Please fill in all field' , 'error');
    } else {
      //Add book to list

      ui.addBooktoList(book);
    }

    // console.log (ui);

    //Add book to the list
    ui.addBooktoList(book)

     // Show success
     ui.showAlert('Book Added!' , 'success');

    // Clear field
    ui.clearFields();

    e.preventDefault();
});