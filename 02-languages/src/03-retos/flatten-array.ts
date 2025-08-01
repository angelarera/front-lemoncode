console.log("************** CHALLENGES - FLATTEN ARRAYS *********************");

// APARTADO A
// Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto es, con un único nivel de profundidad
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flatten = (array) => {
  let result = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log(flatten(sample));
