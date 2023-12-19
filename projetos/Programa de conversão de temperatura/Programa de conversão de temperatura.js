document.getElementById("submitButton").onclick = function () {
    // Obter o valor digitado pelo usuário na caixa de texto
    let temperatura = document.getElementById("textBox").value;
  
    if (temperatura === "") {
      alert("Coloque uma temperatura!");
      return;
    }
  
    // Obter as unidades selecionadas nos elementos de seleção (select)
    let fromUnitSelect = document.getElementById("fromUnitSelect");
    let toUnitSelect = document.getElementById("toUnitSelect");
  
    let fromUnit = fromUnitSelect.value; // Unidade de temperatura original
    let toUnit = toUnitSelect.value; // Unidade de temperatura desejada para conversão
  
    // Converter o valor de temperatura para um número
    temperatura = Number(temperatura);
  
    let temperaturaConvertida;
  
    // Realizar a conversão com base nas unidades selecionadas
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      temperaturaConvertida = toFahrenheit(temperatura);
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      temperaturaConvertida = toKelvin(temperatura);
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      temperaturaConvertida = toCelsius(temperatura);
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      temperaturaConvertida = toKelvin(toCelsius(temperatura));
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      temperaturaConvertida = toCelsius(temperatura - 273.15);
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      temperaturaConvertida = toFahrenheit(toCelsius(temperatura - 273.15));
    } else {
      // Se as unidades selecionadas forem iguais, a temperatura convertida será a mesma
      temperaturaConvertida = temperatura;
    }
  
    // Arredondar o número convertido para duas casas decimais
    temperaturaConvertida = temperaturaConvertida.toFixed(2);
  
    // Exibir o resultado na etiqueta tempLabel
    document.getElementById("tempLabel").innerHTML = temperaturaConvertida + toUnit.toUpperCase();
  
    // Função para converter de Celsius para Fahrenheit
    function toFahrenheit(temperatura) {
      return temperatura * 9 / 5 + 32;
    }
  
    // Função para converter de Celsius para Kelvin
    function toKelvin(temperatura) {
      return temperatura + 273.15;
    }
  
    // Função para converter de Fahrenheit para Celsius
    function toCelsius(temperatura) {
      return (temperatura - 32) * (5 / 9);
    }
  };
  