console.log("************** PRACTICE 111 *********************");

// REVERSE TEXT
// Dado un texto cualquiera, invierte el orden de las palabras.

function reverseText(text: string): string {
  return text.split(" ").reverse().join(" ");
}

console.log('"One two three" reversed is', reverseText("One two three"));
