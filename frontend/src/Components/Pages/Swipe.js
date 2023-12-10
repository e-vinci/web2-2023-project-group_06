/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import logoImage from '../../img/Boonder_logo.png';
import heartImg from '../../img/heart_img.png';

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
  let heart; // Déclarez la variable heart au niveau global

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
    if(leftButton){
      
      /* router.post('/', async (req, res) => {
      
        const { email, password } = req.body;
      
        console.log(`HERE it's the book id: ${id}`);

      
        try {
          const userFound = await loginUser.loginUser(email, password);
      
          console.log(`User found: ${JSON.stringify(userFound)}`);
      
          if (userFound.length > 0) {
            console.log('Password correct');
            res.status(200).json(userFound);
          } else {
            console.log('Invalid email or password');
            res.status(401).json({ error: 'Invalid email or password' });
          }
        } catch (error) {
          console.error('Error during login:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }); */
    }
  }
};

export default Swipe;
