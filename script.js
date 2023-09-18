const playBoard = document.querySelector("#gameboard")

const Gameboard = (() => {
    const gameboard = {
        squares:[" "," "," "," "," "," "," "," "," "]
    }
    return {gameboard};
})();

const game = (() =>{
    const start = () => {
        let round = 0;

        const gameArray = Gameboard.gameboard.squares;
        const message = document.querySelector("#message");

        for(cells in gameArray) {
            const cell = document.createElement("div");
            cell.innerText = " ";
            cell.setAttribute("class", "cells");
            cell.setAttribute("id", `${cells}`);
            playBoard.appendChild(cell);

            cell.addEventListener("click", () => {
                if(gameArray[cell.id] == " ") {
                    if(round % 2 == 0) {
                        gameArray[cell.id] = "X";
                        cell.innerText = gameArray[cell.id];
                        ++round;
                        message.innerText = "Player O's Turn"; // Update with actual player names
                    }
                    else if (round % 2 == 1) {
                        gameArray[cell.id] = "O";
                        cell.innerText = gameArray[cell.id];
                        ++round;
                        message.innerText = "Player X's Turn";
                    }
                }
                
                console.log(gameArray);
            });
        };

        

        const restart = document.getElementById("reset");
        restart.addEventListener("click", () => {
            round = 0;
            
        });
    }
    return {start};
})();

const Player = (name, symbol) => {
    return {name, symbol}
};

const start = document.querySelector("#start");

start.addEventListener("click", () => {
    console.log("started")
    game.start();
});


