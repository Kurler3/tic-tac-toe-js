import chalk from "chalk";
export const startGame = async (board, player1, player2) => {
    await player1.init();

    await player2.init();

    // Turn
    for (let i = 0; i < 9; i++) {
        // Player
        const player = i % 2 === 0 ? player1 : player2;

        // Ask player to place
        await board.place(player);

        // Print
        board.print();

        // Check if own
        if (board.checkIfWon(player)) {
            console.log(chalk.green.bold(`${player.name} won!`));
            return;
        }
    }

    console.log("Draw!");
};
