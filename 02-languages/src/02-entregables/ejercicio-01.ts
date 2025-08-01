console.log("************** DELIVERABLE 01 *********************");

const array = [1, 2, 3, 4, 5];
console.log("The original array is:", array);

// HEAD
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring
const head = <T>([firstElement, ...rest]: T[]): T | undefined => firstElement;
const firstElement = head(array);
console.log("/ HEAD / The first element of the array is:", firstElement);

// TAIL
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = <T>([, ...rest]: T[]): T[] => rest;
const tailArray = tail(array);
console.log("/ TAIL / The tail of the array is:", tailArray);

// INIT
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = <T>(array: T[]): T[] => array.slice(0, -1);
const initArray = init(array);
console.log("/ INIT / The init of the array is:", initArray);

// LAST
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = <T>(array: T[]): T | undefined => array[array.length - 1];
const lastElement = last(array);
console.log("/ LAST / The last element of the array is:", lastElement);
