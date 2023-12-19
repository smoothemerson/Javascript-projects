let x;
let y;
let z;

document.getElementById("rollbutton").onclick = function () {


    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10) + 1;
    z = Math.floor(Math.random() * 10) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}

//Se colocarmos somente o código "Math.random()" ele nos dará um número aleatório entre 0-1 
//Se colocarmos o código "Math.random() * 10" ele nos dará um número aleatório entre 0-10, considerando os decimais
//Se colocarmos o código "Math.floor(Math.random() * 10)" ele irá gerar um número aleatório entre 0-10 e arredondará para "baixo", exemplo: se o números gerado for 5.954574, então ele será 5
//Se colocarmos o código "Math.floor(Math.random() * 10) + 1" ele irá gerar um número aleatório entre 0-10, arredondará para "baixo" e depois somará + 1, exemplo: se o números gerado for 5.954574, então ele ficará 5 e depois + 1 e ficará 6
