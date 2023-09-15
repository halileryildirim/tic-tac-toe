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
    
})

for (cell in gameArray) {
    const cells = document.createElement('div');
    cells.setAttribute("class", "cells")
    cells.innerText = gameArray[cell];
    playBoard.appendChild(cells);

    document.getElementsByClassName("cells")[cell].addEventListener("click", ()=> {
        while(cells.innerText == "") {
            cells.innerText = "O"
        }
    })

}


