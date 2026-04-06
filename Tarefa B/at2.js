function verificarMulta() {
    let permitida = Number(document.getElementById("permitida").value);
    let condutor = Number(document.getElementById("condutor").value);

    if (condutor <= permitida) {
        document.getElementById("resultado").innerText = "Sem Multa";
    } else if (condutor <= permitida * 1.2) {
        document.getElementById("resultado").innerText = "Multa Leve";
    } else {
        document.getElementById("resultado").innerText = "Multa Grave";
    }
}