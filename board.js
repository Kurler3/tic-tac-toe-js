import chalk from "chalk";

const CHECKLIST = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// 0s as empty spots
// 1s as O spots (player 1)
// 2s as X spots (player 2)

export class Board {
    constructor() {
        this.table = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.marks = [chalk.gray("-"), chalk.blueBright("O"), chalk.magenta("X")];
    }

    // Put piece on board
    async place(player) {
        // Ask player to choose a spot
        const answer = await player.chooseSpot(this);

        // Check if spot is taken
        if (this.table[answer] != 0) {
            console.log(chalk.red.bold("Spot already taken!"));
            await this.place(player);
        }
        // Put piece on board
        this.table[answer] = player.order;

        return true;
    }

    print() {
        const arr = [];

        for (let i = 0; i < 9; i += 3) {
            const row = this.table
                .slice(i, i + 3)
                .map((mark) => this.marks[mark])
                .join(" | ");
            arr.push(row);
        }

        console.log(arr.join("\n") + "\n");
    }

    // Check if player won
    checkIfWon(player) {
        const playerNum = player.order;

        for (const list of CHECKLIST) {
            const [a, b, c] = list;

            if (this.table[a] == playerNum && this.table[b] == playerNum && this.table[c] == playerNum) return true;
        }

        return false;
    }
}
