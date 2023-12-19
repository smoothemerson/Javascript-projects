let a;
let b;
let c;

a = window.prompt("Digite a medida do lado A");
a = Number(a);

b = window.prompt("Digite a medida do lado B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Lado C: ", c);
document.getElementById("1").innerHTML = "A hipotenusa vale: " +  c;