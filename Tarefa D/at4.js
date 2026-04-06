function verificarTriangulo() {
    let a = Number(document.getElementById("ladoA").value);
    let b = Number(document.getElementById("ladoB").value);
    let c = Number(document.getElementById("ladoC").value);

    let resultado = document.getElementById("resultado");

    if (a < b + c && b < a + c && c < a + b) {

        if (a === b && b === c) {
            resultado.innerText = "Forma um triângulo Equilátero";
        } else if (a === b || a === c || b === c) {
            resultado.innerText = "Forma um triângulo Isósceles";
        } else {
            resultado.innerText = "Forma um triângulo Escaleno";
        }

    } else {
        resultado.innerText = "Não forma um triângulo";
    }
}