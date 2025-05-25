// Mostrar/ocultar pestañas
function openMethod(methodName) {
  const tabcontents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
  }
  document.getElementById(methodName).style.display = "block";
}

// Método de Bisección (existente)
function calcularBiseccion() {
  const func = document.getElementById("func-biseccion").value;
  const a = parseFloat(document.getElementById("a-biseccion").value);
  const b = parseFloat(document.getElementById("b-biseccion").value);
  
  // Simulación (reemplazar con Octave/API real)
  const resultado = `Raíz aproximada: ${((a + b) / 2).toFixed(4)} (Simulado)`;
  document.getElementById("resultado-biseccion").innerHTML = resultado;
}

// Método Newton-Raphson (nuevo)
function calcularNewton() {
  const func = document.getElementById("func-newton").value;
  const deriv = document.getElementById("deriv-newton").value;
  const x0 = parseFloat(document.getElementById("x0-newton").value);
  
  // Simulación (implementar con Octave/API)
  let x = x0;
  for (let i = 0; i < 10; i++) {
      x = x - eval(func.replace(/x/g, x)) / eval(deriv.replace(/x/g, x));
  }
  document.getElementById("resultado-newton").innerHTML = 
      `Raíz: ${x.toFixed(6)} (Simulado)`;
}

// Método Euler (nuevo)
function calcularEuler() {
  const dy = document.getElementById("dy-euler").value;
  const x0 = parseFloat(document.getElementById("x0-euler").value);
  const y0 = parseFloat(document.getElementById("y0-euler").value);
  const h = parseFloat(document.getElementById("h-euler").value);
  const steps = parseInt(document.getElementById("steps-euler").value);
  
  // Simulación
  let x = x0, y = y0;
  let resultados = `<p>Paso 0: x = ${x.toFixed(2)}, y = ${y.toFixed(4)}</p>`;
  
  for (let i = 1; i <= steps; i++) {
      y += h * eval(dy.replace(/x/g, x).replace(/y/g, y));
      x += h;
      resultados += `<p>Paso ${i}: x = ${x.toFixed(2)}, y = ${y.toFixed(4)}</p>`;
  }
  
  document.getElementById("resultado-euler").innerHTML = resultados;
}

// Inicializar
document.addEventListener("DOMContentLoaded", function() {
  openMethod('biseccion'); // Mostrar Bisección por defecto
});