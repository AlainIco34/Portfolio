// Sélectionne le bouton menu burger et le menu
const menuToggle = document.querySelector('.menu-toggle');
const headerMenu = document.querySelector('.header-menu');

// Ajoute un écouteur d'événement au clic sur le bouton menu burger
menuToggle.addEventListener('click', () => {
    // Ajoute ou retire la classe "active" pour afficher ou cacher le menu
    headerMenu.classList.toggle('active');
});