console.log("hello")
// Declare empty array for library
let myLibrary = [];



//Object Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }

Book.prototype.toggle = function(){
  // if (this.read) {
    
  //   toggle-read-btn.classList.add('btn-light-green')
  // } else {
  //   toggle-read-btn.classList.add('btn-light-red')
  // }
  this.read = !this.read;
}


function toggleRead(index){
  myLibrary[index].toggle();

  Render()


}



const addBook = document.querySelector(".add-book-button")
addBook.addEventListener("click", displayForm)

function displayForm(){
    document.getElementById("add-book-form").style.display= "block";
}



const submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click", function submit(){
  addBookToLibrary()
  document.getElementById("add-book").reset();
  document.getElementById("add-book-form").style.display="none";
})

//Add book
function addBookToLibrary(){
  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  let pages = document.getElementById("pages").value
  let read = document.getElementById("read").checked
  
  
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  Render()
  
}

function Render(){
  const books = document.querySelector(".books")
  books.innerHTML = ""
  for (let i = 0; i <myLibrary.length; i++){
    let book = myLibrary[i]
    let bookEl = document.createElement("div")
    bookEl.innerHTML = `
    <h3 class ="author">${book.title}</h3>
    <h3 class ="author">${book.author}</h3>
    <h3 class ="pages">${book.pages}</h3>
    <h3 class ="read">${book.read ? "Read": "Not Read Yet"}</h3>
    <button class="remove-btn" onclick="removeElement(${i})"> Remove </button>
    <button class="toggle-read-btn" onclick="toggleRead(${i})"> Toggle Read </button>

    `
    
    books.appendChild(bookEl)
    colors(i)
  }


}


function colors(i){
  let book = myLibrary[i]
  let selected = document.querySelectorAll(".toggle-read-btn")[i]
    console.log(selected)
    if (book.read === true){
    selected.style.backgroundColor = "#3630a3";
    } else {
      selected.style.backgroundColor = "#880808";
    }

}




function removeElement(index){
  console.log(index)
  myLibrary.splice(index,1)
  Render()
}


  // myLibrary.forEach(myLibrary => {
  //   const card = document.createElement("div")
  //   card.classList.add("card")
  //   books.appendChild(card)
  //   for(let key in myLibrary){
  //     console.log(`${key}: ${myLibrary[key]}`);
  //     const para = document.createElement("p");
  //     para.textContent = (`${key}: ${myLibrary[key]}`);
  //     card.appendChild(para)
  //   }
  // })






// const hobbit = new Book(
// hobbit.info()