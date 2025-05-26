// Manejo de pestañas
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
      // Remover clase active de todos los botones y contenidos
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Activar el seleccionado
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
  });
});

// Animación para resultados
function showResult(elementId, content) {
  const resultDiv = document.getElementById(elementId);
  resultDiv.querySelector('.result-placeholder').innerHTML = `
      <div class="dynamic-result">
          ${content}
      </div>
  `;
}

// Ejemplo para Bisección
function calcularBiseccion() {
  // ... (cálculos previos)
  
  const resultadoHTML = `
      <div class="result-item">
          <p><strong>Raíz encontrada:</strong> ${root.toFixed(6)}</p>
          <p><strong>Iteraciones:</strong> ${iterations}</p>
          <p><strong>Error estimado:</strong> ${error.toExponential(2)}</p>
      </div>
  `;
  
  showResult('resultado-biseccion', resultadoHTML);
}