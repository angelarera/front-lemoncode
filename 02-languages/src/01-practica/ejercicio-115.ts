console.log("************** PRACTICE 115 *********************");

// ZIP
// Crea una función zipObject tal que acepte un array de claves como primer argumento y un array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo las claves con sus valores. Asumir que el array de claves tiene como mínimo la misma longitud que el de valores
function zipObject(keys, values) {
  return keys.reduce((obj, key, index) => {
    if (index < values.length) {
      obj[key] = values[index];
    }
    return obj;
  }, {});
}

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
); // {spanish: "hola", english: "hi", french: "salut"}
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
