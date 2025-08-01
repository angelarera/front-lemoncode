console.log("************** PRACTICE 206 *********************");

// PLAYERS ORDER
// En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador actual ha consumido su turno, pasa al final de la cola y le toca al siguiente. Dada una lista inicial de jugadores, implementa una función que devuelva la nueva lista de jugadores, en el orden correcto, después de X turnos.

const getPlayersOrder = (players: string[], turns: number): string[] => {
  if (turns <= 0 || players.length === 0) return [...players];

  let currentPlayers = [...players];

  for (let i = 0; i < turns; i++) {
    const [firstPlayer, ...remainingPlayers] = currentPlayers;
    currentPlayers = [...remainingPlayers, firstPlayer];
  }

  return currentPlayers;
};

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(
  "If the players were Ana, Juan, Pablo and Lucia, after two turns the order would be:",
  newOrderIn2Turns
); // ["Pablo", "Lucia", "Ana", "Juan"]
