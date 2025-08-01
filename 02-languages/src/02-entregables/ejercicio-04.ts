console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log("The original array of books is:", books);

// READ BOOKS
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. En caso de no existir el libro devolver false
function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch);
  return book ? book.isRead : false;
}

console.log('Has "Devastación" been read?', isBookRead(books, "Devastación")); // true
console.log(
  'Has "Canción de hielo y fuego" been read?',
  isBookRead(books, "Canción de hielo y fuego")
); // false
console.log(
  'Has "Los Pilares de la Tierra" been read?',
  isBookRead(books, "Los Pilares de la Tierra")
); // false
