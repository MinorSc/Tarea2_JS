
function calcularIMC(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const IMC = peso / (altura * altura);

    let categoria;

    if (IMC < 18.5) {
        categoria = "Bajo peso";
    } else if (IMC >= 18.5 && IMC < 24.9) {
        categoria = "Peso normal";
    } else if (IMC >= 25 && IMC < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }


    document.getElementById("resultado").textContent = `IMC: ${IMC} - Categoría: ${categoria}`;
}

