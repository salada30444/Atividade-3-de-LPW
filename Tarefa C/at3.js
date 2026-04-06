function calcularTempo() {
    let valor = Number(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");

    if (valor < 1.00) {
        resultado.innerText = "Valor insuficiente";
    } else if (valor < 1.75) {
        resultado.innerText = "Tempo: 30 minutos | Troco: R$ " + (valor - 1.00).toFixed(2);
    } else if (valor < 3.00) {
        resultado.innerText = "Tempo: 60 minutos | Troco: R$ " + (valor - 1.75).toFixed(2);
    } else {
        resultado.innerText = "Tempo: 120 minutos | Troco: R$ " + (valor - 3.00).toFixed(2);
    }
}