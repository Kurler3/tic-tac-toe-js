import inquirer from "inquirer";

// Move list
const MOVE_LIST = [
    "0 - Top Left",
    "1 - Top Middle",
    "2 - Top Right",
    "3 - Middle Left",
    "4 - Middle Middle",
    "5 - Middle Right",
    "6 - Bottom Left",
    "7 - Bottom Middle",
    "8 - Bottom Right",
];

export class Player {
    constructor(order) {
        this.order = order;
        this.name = `Player ${order}`;
    }

    // Init user (ask for name)
    async init() {
        const answer = await inquirer.prompt({
            name: "name",
            type: "text",
            message: "Enter your name",
            default: `Player ${this.order}`,
        });

        if (answer.name) {
            this.name = answer.name;
        }
    }

    // Make move
    async chooseSpot(board) {
        const availableSpots = MOVE_LIST.filter((_, index) => {
            return !board.table[index];
        });

        const answer = await inquirer.prompt({
            name: "move",
            type: "list",
            message: `${this.name}, choose your spot`,
            choices: availableSpots,
        });

        return MOVE_LIST.findIndex((move) => move === answer.move);
    }
}
