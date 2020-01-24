class Library {
  constructor(books = []){
    this.books = books;
  }

  bookCount() {
    return this.books.length;
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

  addBooks(newBooks){
    newBooks.forEach(book => this.books.push(book));
  }

  // In library.js refactor the `printInventory` method using destructuring.

  printInventory(){
    for (const {title: title, author: author} of books) {
      console.log(`${title} by ${author}`)
    }
    // this.books.forEach((book) => {
    //   console.log(`${book.title} by ${book.author}`);
    // })
  }

// //
//   for (const {name: n, family: {father: f}} of people) {
//   console.log('Name: ' + n + ', Father: ' + f);

};



export default Library;
