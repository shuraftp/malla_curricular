const ramos = [
  { id: "matematicas", nombre: "Matemáticas", prerequisitos: [] },
  { id: "fisica", nombre: "Física", prerequisitos: ["matematicas"] },
  { id: "programacion", nombre: "Programación", prerequisitos: ["matematicas"] },
  { id: "estructuras", nombre: "Estructuras de Datos", prerequisitos: ["programacion"] }
];

const completados = new Set();

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  ramos.forEach(ramo => {
    const puedeDesbloquearse = ramo.prerequisitos.every(p => completados.has(p));
    const div = document.createElement("div");
    div.className = "ramo";
    div.classList.add(puedeDesbloquearse ? "" : "bloqueado");
    if (completados.has(ramo.id)) div.classList.add("completado");

    div.textContent = ramo.nombre;

    div.onclick = () => {
      if (puedeDesbloquearse && !completados.has(ramo.id)) {
        completados.add(ramo.id);
        renderMalla();
      }
    };

    contenedor.appendChild(div);
  });
}

renderMalla();
