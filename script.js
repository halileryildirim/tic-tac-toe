const Gameboard = (() => {
    let gameboard = {
        squares:["X","O","X","O","O","O","X","O","X"]
    }

    return {gameboard};
})();

const gameArray = Gameboard.gameboard.squares;
const Player = (name, symbol) => {
    return {name, symbol}
};


const start = document.querySelector("#start");
const restart = document.getElementById("reset");


start.addEventListener("click", () => {
   
});

restart.addEventListener("click", () => {
    
})

const playBoard = document.querySelector("#gameboard")


for (cell in gameArray) {
    const cells = document.createElement('div');
    cells.innerText = gameArray[cell];
    playBoard.appendChild(cells);
}
