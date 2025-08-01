console.log("************** PRACTICE 106 *********************");

// DICES
function createDice() {
  let die1: number | null = null;
  let die2: number | null = null;

  return {
    reset: () => {
      die1 = null;
      die2 = null;
      console.log("Dice have been reset");
    },

    roll: () => {
      die1 = Math.floor(Math.random() * 6) + 1;
      die2 = Math.floor(Math.random() * 6) + 1;
    },

    print: () => {
      if (die1 === null || die2 === null) {
        console.log("You need to roll the dice first before printing results");
        return;
      }

      console.log(`You rolled: ${die1} and ${die2}`);

      if (die1 === 6 && die2 == 6) {
        console.log("Congratulations! You rolled double 6 and won a prize!");
      }
    },
  };
}

const myDice = createDice();

myDice.roll();
myDice.print();
myDice.reset();
myDice.print();
