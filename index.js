import figlet from "figlet";
import chalk from "chalk";
import { startGame } from "./match.js";
import { Board } from "./board.js";
import { Player } from "./player.js";

// Logger
const log = console.log;

// Title
log(figlet.textSync("Tic Tac Toe!"));

// Instructions
log(`
    ================================
    ${chalk.red.bold("How to play?")}
    ${chalk.greenBright("1 - Have the player go first")}
    ${chalk.greenBright("2 - Have the second player go second")}
    ${chalk.greenBright("3 - Keep alternating moves")}
`);

startGame(new Board(), new Player(1), new Player(2));
