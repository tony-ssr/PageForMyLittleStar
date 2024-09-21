// scripts.js: Código JavaScript minimalista
document.addEventListener("DOMContentLoaded", function() {
    // Aquí se puede agregar cualquier interacción que desees.
    console.log("Página cargada y lista para interactuar");
});

// scripts.js

// scripts.js: Efectos interactivos para la página

// Preloader: Espera hasta que el video esté completamente cargado
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none'; // Oculta el preloader cuando la página esté lista
});

// Animación de entrada para el contenido al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content-layer'); // Selecciona la capa de contenido
    content.style.opacity = '0'; // Inicia con opacidad 0
    content.style.transform = 'translateY(50px)'; // Mueve hacia abajo el contenido inicialmente

    setTimeout(function() {
        content.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out'; // Añade la transición
        content.style.opacity = '1'; // Muestra el contenido
        content.style.transform = 'translateY(0)'; // Vuelve a la posición original
    }, 500); // Retardo antes de la animación
});



// Capa 2.


// Función para hacer el desplazamiento suave y rápido
function smoothScrollTo(element, duration = 300) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        // Easing function (easeInOutQuad)
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}


// Modal: Mostrar y ocultar
var modal = document.getElementById('poemModal');
var btn = document.getElementById('messageButton');
var span = document.getElementsByClassName('close')[0];

// Mostrar modal al hacer clic en el botón
btn.onclick = function() {
    modal.style.display = 'flex'; // Usamos 'flex' para centrar el modal

    // Desplazar suavemente hacia el modal
    smoothScrollTo(modal, 300); // Duración de 300ms para hacer el desplazamiento rápido
}

// Cerrar modal al hacer clic en la "X"
span.onclick = function() {
    modal.style.display = 'none';

    // Desplazar suavemente de vuelta al botón
    smoothScrollTo(btn, 300); // Duración de 300ms para un desplazamiento rápido
}

// Cerrar modal al hacer clic fuera del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';

        // Desplazar suavemente de vuelta al botón
        smoothScrollTo(btn, 300); // Duración de 300ms para un desplazamiento rápido
    }
}


// Obtener elementos del DOM
var modal = document.getElementById('poemModal');
var btn = document.getElementById('messageButton');
var span = document.getElementsByClassName('close')[0];
var contentContainer = document.getElementById('contentContainer');
var fadeOutThreshold = 200;
var elements = document.querySelectorAll('.section');
var windowHeight = window.innerHeight;
var documentHeight = document.documentElement.scrollHeight;
var fadeInThreshold = documentHeight - windowHeight - fadeOutThreshold;

// Mostrar modal al hacer clic en el botón
btn.onclick = function() {
    modal.style.display = 'flex'; // Usamos 'flex' para centrar el modal

    // Desplazar el scroll al modal
    modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Cerrar modal al hacer clic en la "X"
span.onclick = function() {
    modal.style.display = 'none';

    // Desplazar el scroll de vuelta al botón
    btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Cerrar modal al hacer clic fuera del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';

    // Desplazar el scroll de vuelta al botón
    btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Capa 2: Control de la selección de canciones y logos asociados

const audioPlayer = document.getElementById('audioPlayer');
const songLogo = document.getElementById('songLogo');
const songSelector = document.getElementById('songSelector');

// Al seleccionar una canción, cambia el logo y la canción en el reproductor
songSelector.addEventListener('change', function() {
    const selectedOption = songSelector.options[songSelector.selectedIndex];
    const songUrl = selectedOption.value;
    const logoUrl = selectedOption.getAttribute('data-logo');
    
    // Cambiar el logo
    songLogo.src = logoUrl;
    
    // Cambiar la canción en el reproductor
    audioPlayer.src = songUrl;
    audioPlayer.play(); // Reproducir la canción seleccionada automáticamente
});

// Al iniciar la reproducción, actualizamos el logo según la canción actual
audioPlayer.addEventListener('play', function() {
    const currentSource = audioPlayer.querySelector('source[src="' + audioPlayer.currentSrc + '"]');
    if (currentSource) {
        const logo = currentSource.getAttribute('data-logo');
        songLogo.src = logo; // Cambia el logo según la canción seleccionada
    }
});


// scripts.js

let currentPage = 0; // Página actual (0, 1, 2)
const pages = document.querySelectorAll('.book-page');
const totalPages = pages.length;
const carouselContainer = document.querySelector('.book-pages');

// Botones de navegación
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Función para cambiar de página
function showPage(page) {
    if (page >= totalPages) {
        currentPage = 0; // Regresa a la primera página en bucle
    } else if (page < 0) {
        currentPage = totalPages - 1; // Va a la última página si retrocede desde la primera
    } else {
        currentPage = page;
    }

    // Mover el contenedor de las páginas
    carouselContainer.style.transform = `translateX(-${currentPage * 100}%)`;
}

// Navegación con las flechas
nextBtn.addEventListener('click', () => showPage(currentPage + 1));
prevBtn.addEventListener('click', () => showPage(currentPage - 1));

// Cambio automático de página cada 7 segundos
let autoChange = setInterval(() => {
    showPage(currentPage + 1);
}, 7000);

// Detener el cambio automático al interactuar con el usuario
nextBtn.addEventListener('mouseover', () => clearInterval(autoChange));
prevBtn.addEventListener('mouseover', () => clearInterval(autoChange));

// Reiniciar el cambio automático cuando el usuario deja de interactuar
nextBtn.addEventListener('mouseleave', () => autoChange = setInterval(() => showPage(currentPage + 1), 7000));
prevBtn.addEventListener('mouseleave', () => autoChange = setInterval(() => showPage(currentPage + 1), 7000));

// Agregar soporte para deslizar en pantallas táctiles
let touchStartX = 0;
let touchEndX = 0;

carouselContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carouselContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX) {
        showPage(currentPage + 1); // Desliza hacia la izquierda
    } else if (touchEndX > touchStartX) {
        showPage(currentPage - 1); // Desliza hacia la derecha
    }
});


// scripts.js: Funcionalidad para el Reloj de Amor

document.addEventListener("DOMContentLoaded", function() {
    const loveMessages = [
        "Cada hora contigo es un regalo, mi estrellita.",
        "Pienso en ti con cada latido de mi corazón.",
        "Mi amor por ti brilla como las estrellas, sin fin.",
        "Eres la luz que ilumina cada uno de mis días.",
        "Estar contigo es lo más hermoso que me ha pasado.",
        "Mi amor por ti es eterno, como el universo.",
        "Cada segundo a tu lado es un tesoro.",
        "Te amo más que todas las estrellas en el cielo."
    ];

    const clockElement = document.getElementById("loveClock");
    const messageElement = document.getElementById("loveMessage");
    const pauseButton = document.getElementById("pauseClock");
    let isPaused = false; 

    // Función para actualizar el reloj y el mensaje
    function updateClock() {
        if (!isPaused) {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            // Mostrar la hora actual
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;

            // Seleccionar un mensaje de amor basado en la hora
            const messageIndex = now.getHours() % loveMessages.length;
            messageElement.textContent = loveMessages[messageIndex];

            // Añadir clase de fade-in para una transición suave
            clockElement.classList.add('fade-in');
            messageElement.classList.add('fade-in');
            
            // Eliminar la clase de fade-in después de la animación
            setTimeout(() => {
                clockElement.classList.remove('fade-in');
                messageElement.classList.remove('fade-in');
            }, 2000); 
        }
    }

    // Control de pausa/reanudación
    pauseButton.addEventListener("click", function() {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? "Reanudar Reloj" : "Pausar Reloj";
    });

    // Actualizar el reloj cada segundo
    setInterval(updateClock, 1000);
    updateClock();
});

