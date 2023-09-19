const playBoard = document.querySelector("#gameboard")
const start = document.querySelector("#start");
const restart = document.getElementById("reset");
const message = document.querySelector("#message");

const Gameboard = (() => {
    const gameboard = {
        squares:[" "," "," "," "," "," "," "," "," "]
    }
    return {gameboard};
})();



const game = (() => {
    const gameArray = Gameboard.gameboard.squares;
    
    const start = () => {
        let round = 0;

        const PlayerX = Player(document.getElementById("playerX").value, "X");
        const PlayerO = Player(document.getElementById("playerO").value, "O");

        message.innerText = `${PlayerX.name} is starting first`;

        for(cells in gameArray) {

            const cell = document.createElement("div");
            cell.innerText = " ";
            cell.setAttribute("class", "cells");
            cell.setAttribute("id", `${cells}`);
            playBoard.appendChild(cell);

            restart.addEventListener("click", () => {
                cell.innerText = " ";
                gameArray[cell.id] = " ";
                round = 0;
                message.innerText = " Enter Players Name & Hit Start! ";
                playBoard.replaceChildren();
            });

            cell.addEventListener("click", () => {
                if(gameArray[cell.id] == " ") {
                    if(round % 2 == 0) {
                        gameArray[cell.id] = PlayerX.symbol;
                        cell.innerText = gameArray[cell.id];
                        ++round;
                        message.innerText =  `${PlayerO.name}'s turn` // Update with actual player names
                    }

                    else if (round % 2 == 1) {
                        gameArray[cell.id] = PlayerO.symbol;
                        cell.innerText = gameArray[cell.id];
                        ++round;
                        message.innerText = `${PlayerX.name}'s turn`;
                    }
                }
            });
        };
    }
    return {start};
})();

const Player = (name, symbol) => {
    this.name = name;
    this.symbol = symbol;
    return {name, symbol}
};


start.addEventListener("click", (event) => {
    let validateX = document.getElementById("playerX").checkValidity();
    let validateO = document.getElementById("playerO").checkValidity();

    if(validateO && validateX) {
        event.preventDefault();
        game.start();
    }
    else {message.innerText = "Enter Players Name First!"};
    
})


