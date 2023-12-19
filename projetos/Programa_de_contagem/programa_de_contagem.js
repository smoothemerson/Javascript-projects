let count = 0;

document.getElementById("diminuir").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetar").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("aumentar").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}