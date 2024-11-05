// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner la boîte de couleur et le bouton
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajouter un événement au bouton
    changeColorBtn.addEventListener("click", function() {
        // Changer la couleur de fond de la boîte
        colorBox.style.backgroundColor = getRandomColor();
    });
});
