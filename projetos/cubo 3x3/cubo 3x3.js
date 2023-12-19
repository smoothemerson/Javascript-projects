
let movimentosCubo = ["R", "R'", "R2", "L", "L'", "L2", "U", "D", "F", "B"];
let movimentos = document.querySelector("#movimentos");
let atualizar = document.querySelector("#atualizar");

atualizar.addEventListener("click", exibirMovimentosEmbaralhados);

function embaralhar(array) {
  let indexAtual = array.length;

  while (indexAtual !== 0) {
    let indexAleatorio = Math.floor(Math.random() * array.length);
    indexAtual -= 1;

    let tempo = array[indexAtual];
    array[indexAtual] = array[indexAleatorio];
    array[indexAleatorio] = tempo;
  }
  return array;
}

function exibirMovimentosEmbaralhados() {
  let movimentosEmbaralhados = embaralhar(movimentosCubo);
  movimentos.textContent = movimentosEmbaralhados.join(", ");
}

window.addEventListener("load", exibirMovimentosEmbaralhados);




const timeDisplay1 = document.querySelector("#timeDisplay1");
const startBtn1 = document.querySelector("#startBtn1");
const pauseBtn1 = document.querySelector("#pauseBtn1");
const resetBtn1 = document.querySelector("#resetBtn1");

let startTime1 = 0;
let elapsedTime1 = 0;
let paused1 = true;
let intervalId1;
let mins1 = 0;
let secs1 = 0;
let mil1 = 0;

startBtn1.addEventListener("click", () => {
    if (paused1) {
        startTimer();
    }
});

pauseBtn1.addEventListener("click", () => {
    if (!paused1) {
        pauseTimer();
    }
});

resetBtn1.addEventListener("click", () => {
    resetTimer();
});

function updateTime1() {
    elapsedTime1 = Date.now() - startTime1;

    mil1 = Math.floor(elapsedTime1 % 1000);
    secs1 = Math.floor((elapsedTime1 / 1000) % 60);
    mins1 = Math.floor((elapsedTime1 / 1000 / 60) % 60);

    mil1 = pad1(mil1);
    secs1 = pad(secs1);
    mins1 = pad(mins1);

    timeDisplay1.textContent = `${mins1}:${secs1}:${mil1}`;

    function pad(unit) {
        return String(unit).padStart(2, '0');
    }
    function pad1(unit) {
        return String(unit).padStart(3, '0');
    }
}

function pauseTimer(){
    paused1 = true;
        elapsedTime1 = Date.now() - startTime1;
        clearInterval(intervalId1);
}

function startTimer() {
    paused1 = false;
    startTime1 = Date.now() - elapsedTime1;
    intervalId1 = setInterval(updateTime1, 1);
}

function resetTimer(){
    paused1 = true;
    clearInterval(intervalId1);
    startTime1 = 0;
    elapsedTime1 = 0;
    mins1 = 0;
    secs1 = 0;
    mil1 = 0;
    timeDisplay1.textContent = "00:00:000";
}

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        if (paused1) {
            startTimer();
        } else {
            pauseTimer();
        }
    }
    if (event.key === "r" || event.key === "R") {
        resetTimer();
    }
    if(event.key === "t" || event.key === "T") {
        pauseTimer();
    }
    if(event.key === "f" || event.key === "F") {
        exibirMovimentosEmbaralhados();
    }
    if(event.key === "g" || event.key === "G") {
        location.reload();
    }
});
