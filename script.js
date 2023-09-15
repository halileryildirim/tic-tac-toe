const Gameboard = (() => {
    let gameboard = {
        squares:["","","","","","","","",""]
    }

    return {gameboard};
})();

const gameArray = Gameboard.gameboard.squares;
const playBoard = document.querySelector("#gameboard")

const Player = (name, symbol) => {
    return {name, symbol}
};

const start = document.querySelector("#start");
const restart = document.getElementById("reset");

start.addEventListener("click", () => {
   
});

restart.addEventListener("click", () => {
    round = 0;
})

let round = 0;

for (cell in gameArray) {
    const cells = document.createElement('div');
    cells.setAttribute("class", "cells")
    playBoard.appendChild(cells);

    document.querySelectorAll(".cells")[cell].addEventListener("click", ()=> {
        while(cells.innerText == "") {
            if(round%2 == 0) {
                cells.innerText="X";
                ++round;
                document.querySelector("#message").innerText="Player O's Turn";
            }
            else if (round % 2 == 1) {
                cells.innerText="O";
                ++round;
                document.querySelector("#message").innerText="Player X's Turn";
            }
        }
    })
}


