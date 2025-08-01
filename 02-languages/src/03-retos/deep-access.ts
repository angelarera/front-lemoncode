console.log("************** CHALLENGES - DEEP ACCESS *********************");

// APARTADO A
// Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados, de modo que podamos recuperar una propiedad en cualquiera de sus niveles. Mira a continuación el comportamiento que debería seguir:

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (obj, ...keys) => {
  if (!keys.length) return obj;

  let current = obj;

  for (const key of keys) {
    if (current === undefined || current === null) return undefined;
    current = current[key];
  }

  return current;
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

// APARTADO B
// Ahora implementa el complementario, deepSet, que permita guardar valores en profundidad. Su comportamiento debería ser:
const deepSet = (value, obj, ...keys) => {
  if (keys.length === 0) return;

  let current = obj;
  const lastKey = keys.pop();

  for (const key of keys) {
    if (typeof current[key] !== "object" || current[key] === null) {
      current[key] = {};
    }
    current = current[key];
  }

  current[lastKey] = value;
};

deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject)); // {a: { b: 1}}
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject)); // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject)); // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject)); // Do nothing // {a: 3}
