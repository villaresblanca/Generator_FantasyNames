const names = {
    male: [
        { name: "Aldrin", meaning: "El viejo", origin: "Nórdico" },
        { name: "Bran", meaning: "Cuervo", origin: "Celta" },
        { name: "Dorian", meaning: "Descendiente de Doros", origin: "Griego" },
        { name: "Elric", meaning: "gobernante eterno", origin: "Germánico" },
        { name: "Baldric", meaning: "Gobernante audaz", origin: "Germánico" },
        { name: "Cedric", meaning: "Líder de la guerra", origin: "Inglés" },
        { name: "Aldor", meaning: "Guerrero noble", origin: "Antiguo idioma de los guardianes del bosque"},
        { name: "Branok", meaning: "Fuerte como el acero", origin: "Lengua de los forjadores de montañas"},
        { name: "Caelum", meaning: "Cielo estrellado", origin: "Idioma de los sabios celestiales"},
        { name: "Draven", meaning: "Potector de la oscuridad", origin: "Dialecto de los guardianes nocturnos"},
        { name: "Eldric", meaning: "Rey sabio", origin: "Lenguajede la antigua dinastía"},
        { name: "Fenric", meaning: "Lobo feroz / Vengador", origin: "Lengua de los defensores ancestrales - Nórdico"},
        { name: "Galdor", meaning: "Canto de magia", origin: "Idioma de los bardos encantadores"},
        { name: "Haldric", meaning: "Líder de la fortaleza", origin: "Lengua de los defensores ancestrales"},
        { name: "Ivoran", meaning: "Guardián de los secretos", origin: "Dialecto de los custodios de conocimiento"},
        { name: "Jareth", meaning: "Guerrero de fuego", origin: "Lenguaje de los descendientes de la lava"},
        { name: "Kaelthor", meaning: "Destructor de sombras", origin: "Lengua de los luchadores de luz"},
/*L - Lorian
Significado: Luz de la esperanza
Origen: Idioma de los iluminadores del amanecer

M - Maldrek
Significado: Destructor de enemigos
Origen: Dialecto de los guerreros del caos

N - Nerion
Significado: Hijo del océano
Origen: Lenguaje de los navegantes del mar

O - Orionis
Significado: Estrella fugaz
Origen: Idioma de los astrónomos místicos

P - Pyrion
Significado: Fuego eterno
Origen: Lengua de los maestros del volcán

Q - Quorim
Significado: Guardián de la verdad
Origen: Dialecto de los consejeros sagrados

R - Ragnar
Significado: Guerrero del trueno
Origen: Lengua de los vikingos míticos

S - Sylas
Significado: Protector de los bosques
Origen: Idioma de los druida ancestrales

T - Thalon
Significado: Noble y fuerte
Origen: Lenguaje de los señores del reino

U - Ulyric
Significado: Legado de sabiduría
Origen: Dialecto de los eruditos de la antigua orden

V - Varek
Significado: Destructor de la oscuridad
Origen: Lengua de los campeones de la luz

W - Wraithor
Significado: Espíritu guardián
Origen: Idioma de los seres etéreos

X - Xandar
Significado: Defensor de la paz
Origen: Lenguaje de los pacificadores de la era dorada

Y - Yorin
Significado: Amigo leal
Origen: Dialecto de los clanes de los bosques

Z - Zarek
Significado: Sombra del dragón
Origen: Lengua de los descendientes de los dragones*/
        // Agrega más nombres aquí
    ],
    female: [
        { name: "Aeliana", meaning: "Del Sol", origin: "Latino" },
        { name: "Briala", meaning: "Puede ser una variante de Briana", origin: "Desconocido" },
        { name: "Calia", meaning: "Bella", origin: "Griego" },
        { name: "Eldira", meaning: "Usado en literatura de fantasía", origin: "Ficticio" },
        { name: "Fiona", meaning: "Blanca", origin: "Gaélico" },
        { name: "Beatrix", meaning: "Viajera", origin: "Latino" },
        { name: "Callista", meaning: "La más hermosa", origin: "Griego" },
        // Agrega más nombres aquí
    ],
    nonBinary: [
        { name: "Arin", meaning: "Luz", origin: "Hebreo" },
        { name: "Bryn", meaning: "Colina", origin: "Galés" },
        { name: "Dru", meaning: "Sabio", origin: "Celta" },
        { name: "Ezra", meaning: "Ayuda", origin: "Hebreo" },
        { name: "Kai", meaning: "Mar", origin: "Hawaiano" },
        { name: "Briar", meaning: "Zarza", origin: "Inglés" },
        { name: "Ciel", meaning: "Cielo", origin: "Francés" },
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
    
    // Verificar si la lista filtrada está vacía
    if (filteredNames.length === 0) {
        alert(`No hay nombres disponibles que empiecen con la letra "${initial}".`);
        return;  // Detener la ejecución si no hay nombres disponibles
    }

    const randomIndex = Math.floor(Math.random() * filteredNames.length);
    const randomName = filteredNames[randomIndex];
    
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
