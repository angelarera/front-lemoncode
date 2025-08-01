console.log("************** PRACTICE 112 *********************");

// SUBSETS
// Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra
function subsets(word) {
  return Array.from(word, (_, i) => word.slice(i + 1)).slice(0, -1);
}

// Array.from(word, callback) crea un array a partir de word y para cada carácter, ejecuta la función callback
// (_, i) => word.slice(i + 1) ignora el primer parámetro gracias a (_) y devuelve la subcadena itinerando hasta el final
// slice(0, -1) elimina el último elemento del array, que sería una cadena vacía

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
