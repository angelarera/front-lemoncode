console.log("************** PRACTICE 114 *********************");

// VALUES
// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

function values(obj) {
  return Object.values(obj);
}

console.log(
  'The values in the object { id: 31, duration: 310, name: "long video", format: "mp4" } are:',
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
);

// Evita añadir las propiedades heredadas en caso de ser instancia de una clase:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

function valuesWithoutInherited(obj) {
  return Object.getOwnPropertyNames(obj).map((key) => obj[key]);
}

var john = new Person("John");
console.log(
  "The values in the instance without inherited properties are:",
  valuesWithoutInherited(john)
);
