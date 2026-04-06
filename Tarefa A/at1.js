function calculo() {
    let numero = document.getElementById("labelNum").value;

    numero = Number(numero);

    if (numero % 2 === 0) {
        document.getElementById("espaco").innerText = "O número é par";
    } else {
        document.getElementById("espaco").innerText = "O número é ímpar";
    }
}