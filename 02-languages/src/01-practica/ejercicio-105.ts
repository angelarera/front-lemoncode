console.log("************** PRACTICE 105 *********************");

// DEEP EQUAL
// Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.
var user1 = { name: "María", age: 30 };
var clonedUser1 = { name: "María", age: 30 };

console.log(
  "Are user1 and clonedUser1 the same object?",
  user1 === clonedUser1
); // false

function isEqual(a, b) {
  if (a.hasOwnProperty("name") && b.hasOwnProperty("name")) {
    if (a.name !== b.name) return false;
  }
  if (a.hasOwnProperty("age") && b.hasOwnProperty("age")) {
    if (a.age !== b.age) return false;
  }
  return true;
}

console.log("Are user1 and clonedUser1 equal?", isEqual(user1, clonedUser1)); // true

// Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.
var user2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {}

// console.log(isDeepEqual(user2, clonedUser2)); // true
