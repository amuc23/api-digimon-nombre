import { digimon } from "./digimon.js";

const contenedor = document.getElementById("contenedor");
const searchInput = document.getElementById("nombre");

const generateDigimonCard = (digimon) => {
    return `
        <div class="card col-md-3 mb-3">
            <img src="${digimon.img}" class="card-img-top" alt="${digimon.level}">
            <div class="card-body">
                <h5 class="card-title">${digimon.name}</h5>
                <h5 class="card-title">${digimon.level}</h5>
                <button class="btn btn-primary">Mejor Digimon</button>
            </div>
        </div>
    `;
};

const renderDigimons = (digimons) => {
    contenedor.innerHTML = "";
    digimons.forEach((digimon) => {
        const cardHTML = generateDigimonCard(digimon);
        contenedor.innerHTML += cardHTML;
    });
};

// Mostrar todos los Digimons al principio
renderDigimons(digimon); // Cambié 'digimon' por 'digimons'

// Listener de evento para el campo de búsqueda
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredDigimons = digimon.filter((digimon) =>
        digimon.name.toLowerCase().includes(searchTerm)
    );
    renderDigimons(filteredDigimons);
});

