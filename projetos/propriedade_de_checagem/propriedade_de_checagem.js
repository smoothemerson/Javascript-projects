document.getElementById("meubotao").onclick = function(){
    const myCheckBox = document.getElementById("minhacaixadechecagem");
    const Visabotao = document.getElementById("visabotao");
    const MasterCard = document.getElementById("mastercartaobotao");
    const PayPal = document.getElementById("paypalbotao");
    if(myCheckBox.checked){
        console.log("Você está inscrito!");
        document.getElementById("xLabel").innerHTML = "Você está inscrito!"
    }
    else{
        console.log("Você não está inscrito!");
        document.getElementById("xLabel").innerHTML = "Você não está inscrito!"
    }
    if(Visabotao.checked){
        console.log("Você está pagando com a Visa!");
        document.getElementById("yLabel").innerHTML = "Você está pagando com a Visa!"
    }
    else if(MasterCard.checked){
        console.log("Você está pagando com o MasterCard!");
        document.getElementById("yLabel").innerHTML = "Você está pagando com o MasterCard!"
    }
    else if(PayPal.checked){
        console.log("Você está pagando com o PayPal!");
        document.getElementById("yLabel").innerHTML = "Você está pagando com o PayPal!"
    }
    else{
        console.log("Você deve selecionar uma forma de pagamento!");
        document.getElementById("yLabel").innerHTML = "Você deve selecionar uma forma de pagamento!"
    }
}