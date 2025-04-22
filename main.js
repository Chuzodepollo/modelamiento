function calcularBiseccion() {
  const fx = document.getElementById("fxBiseccion").value;
  const a = parseFloat(document.getElementById("aBiseccion").value);
  const b = parseFloat(document.getElementById("bBiseccion").value);
  const output = document.getElementById("resultadoBiseccion");

  if (isNaN(a) || isNaN(b) || fx.trim() === "") {
    output.innerHTML = "⚠️ Por favor ingresa todos los campos correctamente.";
    return;
  }

  output.innerHTML = `✅ Resultado simulado: raíz entre ${a} y ${b} para f(x) = ${fx}`;
}
