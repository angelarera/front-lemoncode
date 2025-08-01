console.log("************** PRACTICE 108 *********************");

// INCLUDES
// En ES7 ya existe una función de manejo de arrays llamada Array.includes() que indica si un determinado valor figura entre los items de un array dado. Crea una función en ES5 con el mismo comportamiento, es decir, una función que reciba un array y un valor y devuelva un boolean indicando si el valor está dentro del array.

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}

// Ejemplo:
console.log("Does [1, 2, 3] contain the number 3?", includes([1, 2, 3], 3)); // true
console.log("Does [1, 2, 3] contain the number 0?", includes([1, 2, 3], 0)); // false
