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

    // Instantiatr UI
    const ui = new UI();

    console.log (ui);

    //Add book to the list
    ui.addBooktoList(book)

    // Clear field
    ui.clearFields();

    e.preventDefault();
});