

class Hole {
    constructor() {
        this.x = getRandom(50, 900)
        this.y = getRandom(50, 400)
    }
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let gameIsRunning = false;
let holes = [];

function spawnHoles() {
    let numberOfHoles = document.querySelector("#hole-count").value;
    let board = document.querySelector("#board");

    for (let i = 0; i < numberOfHoles; i++) {
        const hole = new Hole();
        holes.push(hole);
        board.innerHTML += `<div class="hole" style= "left: ${hole.x}px; top: ${hole.y}px;"></div>`;
    }
}

function startGame() {
    if (gameIsRunning) return;
    gameIsRunning = true;
    spawnHoles();
}

