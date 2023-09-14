const Gameboard = (() => {
    let gameboard = {
        squares:["","","","","","","","",""]
    }

    return {gameboard};
})();

const Player = (name, symbol) => {
    return {name, symbol}
};


const start = document.querySelector("#start");
const restart = document.getElementById("reset");
start.addEventListener("click", () => {
    alert("SA")
});

restart.addEventListener("click", () => {
    alert("AS")
})