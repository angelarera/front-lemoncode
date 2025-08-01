console.log("************** DELIVERABLE 02 *********************");

const array1 = ["cat", "dog", "mouse"];
console.log("The first array is:", array1);
const array2 = ["platypus", "rhinoceros"];
console.log("The second array is:", array2);
const array3 = ["earth", "sea", "sky"];
const array4 = ["paws", "claws", "jaws", "draws"];
console.log("The additional arrays are:", array3, array4);

// CONCAT
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const concat = <T>(a: T[], b: T[]): T[] => [...a, ...b];
const concatenatedArray = concat(array1, array2);
console.log("/ CONCAT / The concatenated array is:", concatenatedArray);

// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
const concatMultiple = <T>(...arrays: T[][]): T[] => arrays.flat();
const concatenatedMultipleArrays = concatMultiple(
  array1,
  array2,
  array3,
  array4
);
console.log(
  "/ CONCAT MULTIPLE / The concatenated multiple arrays are:",
  concatenatedMultipleArrays
);
