const imagenes = [
    "images/PAGINA_INICIO.png",
    "images/PAGINA_LOGIN.png",
    "images/PAGINA_RESUMEN.png",
    "images/PAGINA_TORNEOS.png",
    "images/PAGINA_TEMPORADAS.png",
    "images/PAGINA_EQUIPOS.png",
    "images/PAGINA_DELEGADOS.png",
    "images/PAGINA_JUGADORES.png",
    "images/PAGINA_TRASPASOS.png",
    "images/PAGINA_ZONAS.png",
    "images/PAGINA_PLANTEL.png",
    "images/PAGINA_FECHAS.png",
    "images/PAGINA_PLANTILLA_1.png",
    "images/PAGINA_PLANTILLA_2.png",
    "images/PAGINA_USUARIO_TORNEOS.png",
    "images/PAGINA_TEMPORADA_1.png",
    "images/PAGINA_TEMPORADA_2.png",
];
let indiceImagenActual = 0;
const imagenCarrusel = document.getElementById("foto-carrusel");
const flechaIzquierda = document.querySelector(".flecha-izquierda");
const flechaDerecha = document.querySelector(".flecha-derecha");

flechaDerecha.addEventListener("click", () => {
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    imagenCarrusel.src = imagenes[indiceImagenActual];
});

flechaIzquierda.addEventListener("click", () => {
    indiceImagenActual = (indiceImagenActual - 1 + imagenes.length) % imagenes.length;
    imagenCarrusel.src = imagenes[indiceImagenActual];
});

//PANTALLA MODAL  APP WEB ---------------------


const modal = document.getElementById("modal-imagen");
const imagenModal = document.getElementById("imagen-modal");
const span = document.getElementsByClassName("cerrar")[0];

imagenCarrusel.onclick = function() {
    modal.style.display = "block";
    imagenModal.src = this.src;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//FLECHAS PANTALLA MODAL  APP WEB --------------------------


const flechaIzquierdaModal = document.querySelector(".flecha-izquierda-modal");
const flechaDerechaModal = document.querySelector(".flecha-derecha-modal");
const imagenModalFlecha = document.getElementById("imagen-modal");

function centrarFlechas() {
    const flechas = document.querySelectorAll(".flecha-modal");

    if (imagenModalFlecha && flechas.length > 0) {
        let alturaImagen = imagenModal.clientHeight; // Obtiene la altura actual de la imagen
        let posicionCentro = imagenModal.offsetTop + (alturaImagen / 2); // Calcula el centro

        flechas.forEach(flecha => {
            flecha.style.top = `${posicionCentro}px`; // Aplica la posición calculada
        });
    }
}

flechaDerechaModal.addEventListener("click", () => {
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    imagenModal.src = imagenes[indiceImagenActual];
    setTimeout(centrarFlechas, 50); // Asegura que la imagen haya cargado antes de centrar las flechas
});

flechaIzquierdaModal.addEventListener("click", () => {
    indiceImagenActual = (indiceImagenActual - 1 + imagenes.length) % imagenes.length;
    imagenModal.src = imagenes[indiceImagenActual];
    setTimeout(centrarFlechas, 50);
});

// Centrar flechas cuando la imagen cambia
imagenModal.onload = centrarFlechas;





//FUNCIONAR CARRUSEL APP MOVIL ----------------------------------------

const imagenesAppMovil = [
    "images/appmovil_inicioSesion.jpeg",
    "images/appmovil_listaJugadores.jpeg",
    "images/appmovil_agregarJugador.jpeg",
    "images/appmovil_editarYEliminarJugador.jpeg",
];

let indiceImagenAppMovil = 0;
const imagenAppMovil = document.getElementById("imagen-app-movil");
const flechaIzquierdaAppMovil = document.querySelector(".p-appmovil .flecha-izquierda");
const flechaDerechaAppMovil = document.querySelector(".p-appmovil .flecha-derecha");

flechaDerechaAppMovil.addEventListener("click", () => {
    indiceImagenAppMovil = (indiceImagenAppMovil + 1) % imagenesAppMovil.length;
    imagenAppMovil.src = imagenesAppMovil[indiceImagenAppMovil];
});

flechaIzquierdaAppMovil.addEventListener("click", () => {
    indiceImagenAppMovil = (indiceImagenAppMovil - 1 + imagenesAppMovil.length) % imagenesAppMovil.length;
    imagenAppMovil.src = imagenesAppMovil[indiceImagenAppMovil];
});



// PANTALLA MODAL APP MOVIL ---------------------------------

// Modal de imagen para la aplicación móvil
const modalAppMovil = document.getElementById("modal-app-movil");
const imagenModalAppMovil = document.getElementById("imagen-modal-app");
const spanAppMovil = document.getElementsByClassName("cerrar-app")[0];
const flechaIzquierdaModalAppMovil = document.querySelector(".flecha-izquierda-modal-app");
const flechaDerechaModalAppMovil = document.querySelector(".flecha-derecha-modal-app");

imagenAppMovil.onclick = function() {
    modalAppMovil.style.display = "block";
    imagenModalAppMovil.src = this.src;
}

spanAppMovil.onclick = function() {
    modalAppMovil.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalAppMovil) {
        modalAppMovil.style.display = "none";
    }
}

flechaDerechaModalAppMovil.addEventListener("click", () => {
    indiceImagenAppMovil = (indiceImagenAppMovil + 1) % imagenesAppMovil.length;
    imagenModalAppMovil.src = imagenesAppMovil[indiceImagenAppMovil];
});

flechaIzquierdaModalAppMovil.addEventListener("click", () => {
    indiceImagenAppMovil = (indiceImagenAppMovil - 1 + imagenesAppMovil.length) % imagenesAppMovil.length;
    imagenModalAppMovil.src = imagenesAppMovil[indiceImagenAppMovil];
});

// SCRIPT PARA COPIAR EL CORREO ---------------------------------------


document.getElementById('botCopiarEmail').addEventListener('click', function() {
    // Copiar el correo electrónico al portapapeles
    navigator.clipboard.writeText('c.ricalde19@gmail.com');
    
    // Mostrar el tilde verde
    this.classList.add('clicked');
    document.querySelector('.tilde-copiado').style.visibility = 'visible';
    
    // Ocultar el tilde después de 2 segundos
    setTimeout(function() {
        document.querySelector('.tilde-copiado').style.visibility = 'hidden';
        document.getElementById('botCopiarEmail').classList.remove('clicked');
    }, 2000); // 2000 milisegundos = 2 segundos
});




// NAVEGAR ENTRE SECCIONES -----------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.getAttribute('href') === '#sobre-mi') {
            // No hacer nada si el enlace es "Sobre mí"
        } else {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});


// TRADUCTOR ESPAÑOL A INGLES ------------------------

const traducciones = {
    espanol:{
        traducSobremi: "Sobre mí",
        traducTecnologias: "Tecnologías",
        traducProyectos: "Proyectos",
        traducContacto: "Contacto",
        traducnombre: "Carlos Ricalde",
        trabajo1: "Analista de Sistemas",
        trabajo2: "Desarrollador Full-Stack",
        traducPresent:"Hola!👋Apasionado por transformar ideas en soluciones tecnológicas. Combino una sólida base como analista de sistemas con habilidades de desarrollo full-stack para crear aplicaciones web robustas y eficientes. Tengo experiencia trabajando con la metodología Scrum, disfruto del trabajo en equipo con una comunicación fluida. Me entusiasma aplicar mis conocimientos e ideas en su equipo de trabajo, a la vez que sigo aprendiendo y creciendo.",
        traducCv: "Descargar CV",
        traducSub1: "TECNOLOGÍAS",
        traducSub2: "HERRAMIENTAS",
        traducSub3: "PROYECTOS",
        traducAppwebT: "Liga de Estrellas",
        traducAppwebP: "Aplicación web para la gestión integral de torneos de fútbol, con interfaces para Administrador y Usuario. Permite la creación de torneos, temporadas y partidos, así como el registro de equipos, jugadores y entrenadores. Se conecta a una base de datos MySQL para el almacenamiento y gestión de la información. Fue desarrollada junto a un equipo de trabajo utilizando la metodología Scrum. En este trabajo, desarrollé e implementé la mayor parte de la lógica back-end, el diseño y la gestión de la base de datos.",
        traducAppMovilT: "Aplicación Móvil - Liga de Estrellas",
        traducAppMovilP: "Esta aplicación es simple y es únicamente para la gestión de personas, en este caso jugadores de fútbol, permitiendo registrar perfiles, editarlos y eliminarlos. Aunque es un proyecto más pequeño en comparación con la aplicación web principal, esta aplicación móvil demuestra mi capacidad para desarrollar soluciones prácticas y funcionales en entornos móviles.",
        contacto: "CONTACTO",
        botCopiarEmail: "Copiar"
    },
    ingles:{
        traducSobremi: "About me",
        traducTecnologias: "Technologies",
        traducProyectos: "Projects",
        traducContacto: "Contact",
        traducnombre: "Carlos Ricalde",
        trabajo1: "Systems Analyst",
        trabajo2: "Full Stack Developer",
        traducPresent: "Hi!👋Passionate about transforming ideas into technological solutions. I combine a solid foundation as a systems analyst with full-stack development skills to create robust and efficient web applications. I have experience working with the Scrum methodology, I enjoy teamwork using clear communication. I am excited to apply my knowledge and ideas to your team, while continuing to learn and grow.",
        traducCv: "Download CV",
        traducSub1: "TECHNOLOGIES",
        traducSub2: "TOOLS",
        traducSub3: "PROJECTS",
        traducAppwebT: "Stars League",
        traducAppwebP: "Web application for the comprehensive management of soccer tournaments, with interfaces for Administrator and User. It allows the creation of tournaments, seasons, and matches, as well as the registration of teams, players, and coaches. It connects to a MySQL database for the storage and management of information. It was developed together with a work team using the Scrum methodology. In this work, I developed and implemented most of the back-end logic, design, and database management.",
        traducAppMovilT: "Mobile App - Stars League",
        traducAppMovilP: "This application is simple and is only for the management of people, in this case soccer players, allowing to register, edit and delete profiles. Although it is a smaller project compared to the main web application, this mobile application demonstrates my ability to develop practical and functional solutions in mobile environments.",
        contacto: "CONTACT",
        botCopiarEmail: "Copy"
    }
}




const banderaIngles = document.querySelector(".idioma-container img:first-child");
const banderaEspana = document.querySelector(".idioma-container img:last-child");

banderaIngles.addEventListener("click", () => {
    traducir("ingles");
});

banderaEspana.addEventListener("click", () => {
    traducir("espanol");
});

function traducir(idioma) {
    const traduccion = traducciones[idioma];
    for (const id in traduccion) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.textContent = traduccion[id];
        }
    }
}




