console.log("************** PRACTICE 101 *********************");

// BIGGEST WORD
// Crea una función que reciba una frase en formato string y devuelva la palabra más larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.

function biggestWord(phrase: string): string {
  const words: string[] = phrase.split(" ");
  let longestWord: string = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(
  'In the sentence "This sentence may contain many words" the longest word is:',
  biggestWord("This sentence may contain many words")
);
console.log(
  'In the sentence "Basic Javascript exercises", the longest word is:',
  biggestWord("Basic Javascript exercises")
);
