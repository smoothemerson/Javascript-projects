const numero = Math.floor(Math.random() * 10 + 1);
let tentativas = 0;

document.getElementById("submitButton").onclick = function(){
    let resposta = document.getElementById("guessField").value;
    tentativas += 1;

    if(resposta == numero){
        alert(`${numero} é o número! Levou ${tentativas} tentativas para você adivinhar o número!`)
    }
    else if(resposta < numero){
        alert(`Acrescente mais!`)
    }
    else{
        alert("Diminua mais!")
    }
}