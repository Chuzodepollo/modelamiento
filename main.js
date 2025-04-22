function evaluarFuncion(funcionStr, x) {
  try {
    return Function('"use strict"; return (x) => ' + funcionStr)()(x);
  } catch (e) {
    return NaN;
  }
}

function calcularBiseccion() {
  const fx = document.getElementById("fxBiseccion").value;
  const a = parseFloat(document.getElementById("aBiseccion").value);
  const b = parseFloat(document.getElementById("bBiseccion").value);
  const output = document.getElementById("resultadoBiseccion");

  if (isNaN(a) || isNaN(b) || fx.trim() === "") {
    output.innerHTML = "⚠️ Por favor ingresa todos los campos correctamente.";
    return;
  }

  let fa = evaluarFuncion(fx, a);
  let fb = evaluarFuncion(fx, b);

  if (isNaN(fa) || isNaN(fb)) {
    output.innerHTML = "❌ Error al evaluar la función. Verifica la sintaxis.";
    return;
  }

  if (fa * fb >= 0) {
    output.innerHTML = "❌ f(a) y f(b) deben tener signos opuestos.";
    return;
  }

  let tol = 1e-6;
  let maxIter = 100;
  let iter = 0;
  let c, fc;

  let left = a;
  let right = b;

  while ((right - left) / 2 > tol && iter < maxIter) {
    c = (left + right) / 2;
    fc = evaluarFuncion(fx, c);

    if (fc === 0) break;

    if (fa * fc < 0) {
      right = c;
      fb = fc;
    } else {
      left = c;
      fa = fc;
    }

    iter++;
  }

  const raiz = (left + right) / 2;
  output.innerHTML = `✅ Resultado: raíz ≈ ${raiz.toFixed(6)} (en ${iter} iteraciones)`;
}
