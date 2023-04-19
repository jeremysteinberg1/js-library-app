console.log("hello")
// Declare empty array for library
let myLibrary = [];



//Object Constructor
function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      return (`${this.name} by ${this.author}, ${this.pages}, ${this.status}`)
    }
    
}

//Add book
function addBookToLibrary(Title, Author, Pages, Read){
  let book = new Book(Title, Author, Pages, Read)
  myLibrary.push(book)
  // // const addBook = document.querySelector(".add-book")
  // // addBook.addEventListener('click', function(){

  // })
}







// const hobbit = new Book("hobbit", "tolkien", 290, "have not read")
// hobbit.info()