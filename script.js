// Récupère automatiquement l'année actuelle
// pour éviter de modifier le footer chaque année.
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();