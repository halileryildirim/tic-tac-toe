const Gameboard = (() => {
    let gameboard = {
        squares:["","","","","","","","",""]
    }

    return {gameboard};
})();

const Player = (name, symbol) => {
    return {name, symbol}
};

document.querySelector("#start").addEventListener("click", () => {
    let playerX = Player(document.querySelector("#playerX").value, "X");
    let playerO = Player(document.querySelector("#playerO").value, "O");
});
