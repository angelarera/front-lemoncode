console.log("************** PRACTICE 109 *********************");

// PRIMES
// Crea una función tal que, dado un número entero de inicio from y otro de fin to, encuentre los números primos entre ellos y los muestre por pantalla.
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function showPrimes(from, to) {
  for (let i = from; i <= to; i++) {
    if (isPrime(i)) {
      console.log(`${i} is PRIME!`);
    } else {
      console.log(`${i} is not a prime`);
    }
  }
}

showPrimes(1, 10);
