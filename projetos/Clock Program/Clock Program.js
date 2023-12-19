const minhaLabel = document.getElementById("minhaLabel");

atualizar();
setInterval(atualizar, 1000);

function atualizar(){

    let data = new Date();
    minhaLabel.innerHTML = FormatarTempo(data);

    function FormatarTempo(data){
        let horas = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();
        let amOuPm = horas >= 12 ? "AM" : "PM";

        horas = (horas % 24) || 24;

        horas = FormatarZeros(horas);
        minutos = FormatarZeros(minutos);
        segundos = FormatarZeros(segundos);

        return `${horas}:${minutos}:${segundos} ${amOuPm}`
    }
    function FormatarZeros(tempo){
        tempo = tempo.toString();
        return tempo.lenght < 2 ? "0" + tempo : tempo;
    }
}