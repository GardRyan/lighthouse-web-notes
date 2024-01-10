//  Write a program that takes a single parameter 
//  from the command line, a number, and rolls that 
//  many six-sided dice.

// create a function to imput a number from node dice-roller.js
// identify the number of "times" you need to roll a dice
// create a random number generator to spit out the results

// Store the argument passed through the command line
const numOfDice = parseInt(process.argv[2]);

// Function to roll a single six-sided die
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to roll a specific number of dice
  const diceRolls = [];
  for (let i = 0; i < numOfDice; i++) {
    diceRolls.push(rollDie());
  }

console.log(`Rolled ${numOfDice} dice: ${diceRolls.join(', ')}`);

//  output example
//  > node dice-roller.js 3
//  Rolled 3 dice: 2, 6, 5
