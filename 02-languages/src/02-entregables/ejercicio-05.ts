console.log("************** DELIVERABLE 05 *********************");

// SLOT MACHINE
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

class SlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const roulette1 = Math.random() < 0.5;
    const roulette2 = Math.random() < 0.5;
    const roulette3 = Math.random() < 0.5;

    if (roulette1 && roulette2 && roulette3) {
      console.log(`Congratulations!!! You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!");
    }
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
