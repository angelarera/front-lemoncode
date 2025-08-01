console.log(
  "************** CHALLENGES - UNDERSTANDING JS *********************"
);

// Cuestión 1
// ¿Existe alguna forma de que la expresión x === x de como resultado false?
const x = NaN;
console.log(x === x);
// Usando NaN, que es el único valor en JS que no es igual a sí mismo

// Cuestión 2
// Habiendo resuelto la Cuestión l, ¿como implementarías una función que compruebe si un determinado valor es NaN?
const isNaNValue = (v) => v !== v;
console.log(isNaNValue(NaN));

// Cuestión 3
// Habiendo resuelto la Cuestion 2 ¿Existe alguna forma de que la expresión !isNaNValue(x) && x !== x de como resultado true? No debes modificar la implementación isNaNValue en este ejercicio.

// Cuestión 4
// ¿Podrías dar con alguna forma de que la expresión x + 1 === x - 1 arroje true?
const z = Infinity;

console.log(z + 1 === z - 1);

// Cuestión 5
// Se te ocurre alguna forma de hacer que la expresión x > x de como resultado true?
let toggle = false;
const y = {
  valueOf: function () {
    toggle = !toggle;
    return toggle ? 1 : 0;
  },
};

console.log(y > y);
