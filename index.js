function convertir() {
    let galones = document.getElementById("galones").value;
    let litros = galones * 3.785;
    let botellas = litros / 1.5;

    document.getElementById("litros").innerText = litros.toFixed(2);
    document.getElementById("botellas").innerText = botellas.toFixed(2);
}
