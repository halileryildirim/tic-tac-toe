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

const gameArray = Gameboard.gameboard.squares;

const Player = (name, symbol) => {
    this.name = name;
    this.symbol = symbol;
    return {name, symbol}
};

const winnerDeclare = (() => {

    const winner = () => {

        let combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        let winner = false

        for(combs in combinations) {
            let indicator = combinations[combs];
            
            if(gameArray[indicator[0]]=="X" && gameArray[indicator[1]]=="X" && gameArray[indicator[2]]=="X"){
                winner = true;
                message.innerText = "X";

            }
            else if(gameArray[indicator[0]]=="O" && gameArray[indicator[1]]=="O" && gameArray[indicator[2]]=="O"){
                winner = true;
                message.innerText = "O";
            }
            else if(!gameArray.includes(" ") && !winner) {
                message.innerText = "It's a TIE!"
            } 
        }
        return winner;
    }

    return {winner};
})();

const game = (() => {
    
    const start = () => {
        let round = 0;
        const PlayerX = Player(document.getElementById("playerX").value, "X");
        const PlayerO = Player(document.getElementById("playerO").value, "O");

        window.addEventListener("click", ()=>{
            winnerDeclare.winner();
            if(message.innerText == "X"){
                message.innerText = `Winner is: ${PlayerX.name}!`;
            }
            else if(message.innerText == "O") {
                message.innerText = `Winner is: ${PlayerO.name}!`;
            }
        });
        message.innerText = `${PlayerX.name} is starting first!`;

        for(cells in gameArray) {

            const cell = document.createElement("div");
            cell.innerText = " ";
            cell.setAttribute("class", "cells");
            cell.setAttribute("id", `${cells}`);
            playBoard.appendChild(cell);

            restart.addEventListener("click", () => {
                cell.innerText = " ";
                gameArray.fill(" ");
                round = 0;
                message.innerText = " Enter Player Names & Hit Start! ";
                playBoard.replaceChildren();
            });

                cell.addEventListener("click", () => {
                    let condition = !winnerDeclare.winner();
                    if(condition) {
                        if(gameArray[cell.id] == " ") {
                            if(round % 2 == 0) {
                                gameArray[cell.id] = PlayerX.symbol;
                                cell.innerText = gameArray[cell.id];
                                ++round;
                                message.innerText =  `${PlayerO.name}'s turn`;
                            }
        
                            else if (round % 2 == 1) {
                                gameArray[cell.id] = PlayerO.symbol;
                                cell.innerText = gameArray[cell.id];
                                ++round;
                                message.innerText = `${PlayerX.name}'s turn`;
                            }
                    }
                    }

                    
                });
        };
    }
    return {start};
})();


 
start.addEventListener("click", (event) => {
    let valX = document.getElementById("playerX").checkValidity();
    let valO = document.getElementById("playerO").checkValidity();

    if(valX && valO) {
        gameArray.fill(" "); 
        playBoard.replaceChildren();
        event.preventDefault();
        game.start();
    }
    else {message.innerText = "Enter Player Names First!"};
    
})


