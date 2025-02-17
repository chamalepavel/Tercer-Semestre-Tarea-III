document.getElementById("convertir").addEventListener("click", function() {
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let unidad = document.getElementById("unidad").value;
    let resultado = "";

    if (isNaN(cantidad) || cantidad <= 0) {
        resultado = "Por favor ingrese un valor válido.";
    } else {
        switch (unidad) {
            case "galon":
                resultado = `${cantidad} galón(es) = ${(cantidad * 3.785).toFixed(2)} litros = ${(cantidad * 7.57).toFixed(2)} botellas (500ml)`;
                break;
            case "litro":
                resultado = `${cantidad} litro(s) = ${(cantidad / 3.785).toFixed(2)} galones = ${(cantidad * 2).toFixed(2)} botellas (500ml)`;
                break;
            case "botella":
                resultado = `${cantidad} botella(s) = ${(cantidad * 0.5).toFixed(2)} litros = ${(cantidad * 0.5 / 3.785).toFixed(2)} galones`;
                break;
            default:
                resultado = "Unidad no reconocida.";
        }
    }

    document.getElementById("resultado").textContent = resultado;
});
