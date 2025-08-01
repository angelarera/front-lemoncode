console.log("************** PRACTICE 103 *********************");

// CHECK ARGUMENTS
// Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean undefined o null. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.

/*
function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}
*/

function f(input) {
  return input === undefined ? "Unknown" : input === null ? "" : input;
}
