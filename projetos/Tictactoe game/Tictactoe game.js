
const cells = document.querySelectorAll(".cell");
const statsText = document.querySelector("#statsText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],                  //LINHA
    [3, 4, 5],                  //LINHA
    [6, 7, 8],                  //LINHA
    [0, 3, 6],                  //COLUNA
    [1, 4, 7],                  //COLUNA
    [2, 5, 8],                  //COLUNA
    [0, 4, 8],                  //DIAGONAL
    [2, 4, 6],                  //DIAGONAL
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statsText.textContent = `É a vez do ${currentPlayer}`;
    running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statsText.textContent = `É a vez do ${currentPlayer}`;
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        statsText.textContent = `${currentPlayer} ganhou!`;
        running = false;
    }
    else if(!options.includes("")){
        statsText.textContent = "Empate!";
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statsText.textContent = `É a vez do ${currentPlayer}`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}