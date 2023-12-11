/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import logoImage from '../../img/Boonder_logo.png';
import heartImg from '../../img/heart_img.png';

const Swipe = () => {
  const main = document.querySelector('main');
  const mainfiller = `
    <h1> Liste des livres proposés par la communauté </h1>
    <div id="swipeContainer" class="container mt-5 text-center">
      <img src="" alt="logo" class="image-fluid w-25 mx-auto" style="position: relative" id="swipableImage" draggable="false"> 
    </div>
    <button id="leftButton" disabled>Activer à gauche</button>
    <button id="rightButton" disabled>Activer à droite</button>
  `;

  main.innerHTML = mainfiller;

  const swipeContainer = document.getElementById('swipeContainer');
  const swipableImage = document.getElementById('swipableImage');
  const leftButton = document.getElementById('leftButton');
  const rightButton = document.getElementById('rightButton');

  let isMouseDown = false;
  let startX;
  let heart; // Déclarez la variable heart au niveau global

  swipeContainer.addEventListener('mousedown', handleMouseDown, false);
  swipeContainer.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mouseup', handleMouseUp, false);

  function handleMouseDown(event) {
    isMouseDown = true;
    startX = event.clientX;
  }

  async function handleMouseMove(event) {
    if (!isMouseDown) {
      return;
    }

// Récupère l'image du serveur
try {
  const response = await fetch('/api/swipe');
  const imageData = await response.json();

  // Crée un nouvel élément img
  const newImage = new Image();
  
  // Attache un gestionnaire d'événements pour le chargement de l'image
  newImage.onload = () => {
    // Met à jour l'image avec celle nouvellement créée
    swipableImage.src = newImage.src;
  };

  // Définit la source de l'image nouvellement créée
  newImage.src = imageData.photo;
} catch (error) {
  console.error('Error fetching image:', error);
}

    const currentX = event.clientX;
    const difference = startX - currentX;

    // Déplace l'image horizontalement en fonction de la différence
    swipableImage.style.transform = `translateX(${-difference}px)`;

    // Activer le bouton à gauche si l'image est déplacée vers la gauche
    leftButton.disabled = difference > 0;

    // Activer le bouton à droite si l'image est déplacée vers la droite
    rightButton.disabled = difference < 0;

    if (difference > 0) {
      if (!heart) {
        // Crée le cœur si ce n'est pas encore créé
        heart = document.createElement("div");  
        heart.className = "heart";
        document.body.appendChild(heart);

        // Positionne le cœur au point de départ
        heart.style.position = "absolute";
        heart.style.width = "24.23px";
        heart.style.height = "22.21px";
        heart.style.background = `url(${heartImg})`; // Remplacez par le chemin de votre emoji cœur
        heart.style.backgroundSize = "cover";
        heart.style.transition = "transform 0.5s ease-out"; // Propriétés d'animation
      }

      
    }
  }

  function handleMouseUp() {
    isMouseDown = false;
    startX = null;

    // Réinitialise la position de l'image
    swipableImage.style.transform = 'translateX(0)';

    // Supprime le cœur après l'animation (s'il existe)
    if (heart && document.body.contains(heart)) {
      setTimeout(() => {
        document.body.removeChild(heart);
        heart = null; // Réinitialise la variable heart
      }, 500); // Ajoutez une durée pour correspondre à la durée de l'animation du cœur
    }
  }
};

export default Swipe;
