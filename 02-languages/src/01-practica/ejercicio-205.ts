console.log("************** PRACTICE 205 *********************");

// Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci
const fib = (n) => {
  let [a, b] = [0, 1];

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return a;
};
