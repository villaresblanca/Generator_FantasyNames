const names = {
    male: [
        { name: "Aldrin", meaning: "El viejo", origin: "Nórdico" },
        { name: "Bran", meaning: "Cuervo", origin: "Celta" },
        { name: "Dorian", meaning: "Descendiente de Doros", origin: "Griego" },
        { name: "Elric", meaning: "gobernante eterno", origin: "Germánico" },
        { name: "Fenric", meaning: "Vengador", origin: "Nórdico" },
        { name: "Baldric", significado: "Gobernante audaz", origin: "Germánico" },
        { name: "Cedric", significado: "Líder de la guerra", origin: "Inglés" },
        // Agrega más nombres aquí
    ],
    female: [
        { name: "Aeliana", meaning: "Del Sol", origin: "Latino" },
        { name: "Briala", meaning: "Puede ser una variante de Briana", origin: "Desconocido" },
        { name: "Calia", meaning: "Bella", origin: "Griego" },
        { name: "Eldira", meaning: "Usado en literatura de fantasía", origin: "Ficticio" },
        { name: "Fiona", meaning: "Blanca", origin: "Gaélico" },
        { name: "Beatrix", significado: "Viajera", origin: "Latino" },
        { name: "Callista", significado: "La más hermosa", origin: "Griego" },
        // Agrega más nombres aquí
    ],
    nonBinary: [
        { name: "Arin", meaning: "Luz", origin: "Hebreo" },
        { name: "Bryn", meaning: "Colina", origin: "Galés" },
        { name: "Dru", meaning: "Sabio", origin: "Celta" },
        { name: "Ezra", meaning: "Ayuda", origin: "Hebreo" },
        { name: "Kai", meaning: "Mar", origin: "Hawaiano" },
        { name: "Briar", significado: "Zarza", origin: "Inglés" },
        { name: "Ciel", significado: "Cielo", origin: "Francés" },
        // Agrega más nombres aquí
    ]
};


function generateName() {
    const gender = document.getElementById('gender').value;
    const initial = document.getElementById('initial').value;
    const nameList = names[gender];

    if (!nameList || nameList.length === 0) {
        alert("No hay nombres disponibles para este género.");
        return;
    }

    // Filtrar los nombres por la inicial seleccionada
    const filteredNames = initial ? nameList.filter(name => name.name.startsWith(initial)) : nameList;
    
    if (filteredNames.length === 0) {
        alert(`No hay nombres disponibles que empiecen con la letra "${initial}".`);
        return;
    }
    const randomIndex = Math.floor(Math.random() * nameList.length);
    const randomName = nameList[randomIndex];
    
// Crear el mensaje con el nombre, significado y origen usando etiquetas HTML con clases
    const message = 
                    `<span class="name-title">Nombre:</span> <span class="name">${randomName.name}<br>` +
                    `<span class="meaning-title">Significado:</span> <span class="meaning">${randomName.meaning}<br>` +
                    `<span class="origin-title">Origen:</span> <span class="origin">${randomName.origin}</span>`;
    
    // Mostrar el mensaje en una ventana emergente
    //alert(message);
    
    // También puedes mostrar el nombre en el área designada si lo prefieres
    document.getElementById('name-output').innerHTML = message;
    // Usamos .innerHTML en lugar de .textContent para insertar HTML (como <br>) en el contenido del elemento.
}
// Puedo agregarle también la raza del personaje, origen, inicial, etc.
