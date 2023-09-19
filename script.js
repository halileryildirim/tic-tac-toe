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
                message.innerText = "X Starts First!";
                console.log(gameArray);
            });

            cell.addEventListener("click", () => {
                if(gameArray[cell.id] == " ") {
                    if(round % 2 == 0) {
                        gameArray[cell.id] = "X";
                        cell.innerText = gameArray[cell.id];
                        ++round;
                        message.innerText = "Player O's Turn!"; // Update with actual player names
                    }

                    else if (round % 2 == 1) {
                        gameArray[cell.id] = "O";
                        cell.innerText = gameArray[cell.id];
                        ++round;
                        message.innerText = "Player X's Turn!";
                    }
                }
            });
        };
    }
    return {start};
})();

const Player = (name, symbol) => {
    return {name, symbol}
};


start.addEventListener("click", (event) => {
    let validateX = document.getElementById("playerX").checkValidity();
    let validateO = document.getElementById("playerO").checkValidity();

    if(validateO && validateX) {
        event.preventDefault();
        game.start()
    }
    
})


