// Récupération de l'élément HTML5
const yearCopyright = document.querySelector(".copyright__year");

// Récupération de la date actuelle et de l'anné en cours
const today = new Date();
const currentYear = today.getFullYear();

// Affichage dynamique de l'année en cours
yearCopyright.textContent = `${currentYear}`;
