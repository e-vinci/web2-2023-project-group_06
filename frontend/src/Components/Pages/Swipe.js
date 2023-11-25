import logoImage from '../../img/Boonder_logo.png';

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

  swipeContainer.addEventListener('mousedown', handleMouseDown, false);
  swipeContainer.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mouseup', handleMouseUp, false);

  function handleMouseDown(event) {
    isMouseDown = true;
    startX = event.clientX;
  }

  function handleMouseMove(event) {
    if (!isMouseDown) {
      return;
    }

    const currentX = event.clientX;
    const difference = startX - currentX;

    // Déplace l'image horizontalement en fonction de la différence
    swipableImage.style.transform = `translateX(${-difference}px)`;

    // Activer le bouton à gauche si l'image est déplacée vers la gauche
    leftButton.disabled = difference > 0;

    // Activer le bouton à droite si l'image est déplacée vers la droite
    rightButton.disabled = difference < 0;
  }

  function handleMouseUp() {
    isMouseDown = false;
    startX = null;

    // Réinitialise la position de l'image
    swipableImage.style.transform = 'translateX(0)';
  }
};

export default Swipe;
