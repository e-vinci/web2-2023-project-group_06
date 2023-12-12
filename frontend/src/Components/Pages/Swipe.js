/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import logoImage from '../../img/boonder_advanced_logo.png';

const Swipe = () => {
  const main = document.querySelector('main');
  const mainfiller = `
    <h1> Liste des livres proposés par la communauté </h1>
    <div id="swipeContainer" class="container mt-5 text-center">
      <img src="${logoImage}" alt="logo" class="image-fluid w-25 mx-auto" style="position: relative" id="swipableImage" draggable="false"> 
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
  let isSwipeEnded = true; // Ajout d'un indicateur pour suivre la fin du swipe

  swipeContainer.addEventListener('mousedown', handleMouseDown, false);
  swipeContainer.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mouseup', handleMouseUp, false);

  async function handleMouseDown(event) {
    isMouseDown = true;
    startX = event.clientX;
  }

  async function handleMouseMove(event) {
    if (!isMouseDown) {
      return;
    }

    const currentX = event.clientX;
    const difference = startX - currentX;

    swipableImage.style.transform = `translateX(${-difference}px)`;

    leftButton.disabled = difference > 0;
    rightButton.disabled = difference < 0;

    // Met à jour l'indicateur de fin de swipe
    isSwipeEnded = false;
  }

  async function handleMouseUp() {
    isMouseDown = false;
    startX = null;
  
    swipableImage.style.transform = 'translateX(0)';
  
    // Exécute la requête si le swipe est terminé
    if (!isSwipeEnded) {
      try {
        const response = await fetch(`${process.env.API_BASE_URL}/swipe`);
        const imageData = await response.json();
  
        // Assurez-vous que imageData contient l'URL de l'image
        if (imageData[0] && imageData[0].photo) {
          swipableImage.src = imageData[0].photo;
  
          // Met à jour l'indicateur pour éviter d'autres requêtes
          isSwipeEnded = true;
        } else {
          console.error('Invalid image data received:', imageData[0]);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
  }
};

export default Swipe;
