# Proyecto Final – Cálculo Numérico (Avance 1)

## 🎯 Problema
Se desea desarrollar una herramienta interactiva que permita hallar raíces de ecuaciones no lineales, usando el **método de bisección**, orientado a estudiantes de ingeniería que necesiten validar resultados rápidamente.

### Justificación
Este tipo de cálculo es común en ingeniería, pero muchos estudiantes cometen errores manuales. La app automatiza el proceso y ofrece resultados en segundos con una interfaz amigable.

## 📋 Ingeniería de Requisitos

### Requisitos Funcionales
- El sistema debe permitir ingresar una función f(x).
- El sistema debe permitir ingresar el intervalo [a, b].
- El sistema debe mostrar el resultado estimado de la raíz.
- El sistema debe validar si f(a)*f(b) < 0.

### Requisitos No Funcionales
- La interfaz debe ser simple, responsiva y clara.
- El tiempo de respuesta debe ser inferior a 2 segundos.
- La app debe funcionar desde cualquier navegador moderno.

### Casos de Uso
**CU-01:** Calcular raíz por Bisección  
**CU-02:** Validar datos de entrada  
**CU-03:** Mostrar resultado en pantalla  

## 📌 Backlog Inicial

| ID  | Historia de Usuario                            | Prioridad |
|-----|-----------------------------------------------|-----------|
| HU1 | Como usuario, quiero ingresar f(x)            | Alta      |
| HU2 | Como usuario, quiero ingresar intervalo [a, b]| Alta      |
| HU3 | Como usuario, quiero ver el resultado         | Alta      |
| HU4 | Como usuario, quiero saber si el intervalo es válido | Media |

## 🏗️ Arquitectura del Sistema

**Tecnologías:**
- HTML, CSS, JavaScript (Frontend)
- Posible backend futuro en Python o conexión con Octave/Matlab

**Estructura Inicial:**
- SPA: una sola página
- JS maneja los eventos y cálculos temporales
