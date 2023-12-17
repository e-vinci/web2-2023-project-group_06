/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import logoImage from '../../img/boonder_advanced_logo.png';
import heartImage from '../../img/heart_img.png';

const Swipe = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem('token'));
  console.log('1 user : ', user);
  console.log('1 token : ', token);
  
  if (user && token) {
    try {
        console.log('BEFORE FETCH');
        const responseToken = await fetch(`${process.env.API_BASE_URL}/checkToken`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });
        console.log(`AFTER FETCH + token : ${token}`);

        console.log('Server Response:', responseToken);

        if (!responseToken.ok) {
            throw new Error(`fetch error : ${responseToken.status} : ${responseToken.statusText}`);
        }
        const result = await responseToken.json();

        if (result.isValid) {
          const main = document.querySelector('main');
          const mainfiller = `
            <h1> Liste des livres proposés par la communauté </h1>
            <div id="swipeContainer" class="container mt-5 text-center">
              <img src="${logoImage}" alt="logo" class="image-fluid w-25 mx-auto" style="position: relative" id="swipableImage" draggable="false"> 
              <div id="matchContainer" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); visibility: hidden;">
                <img src="${heartImage}" alt="heart" style="width: 300px; height: 300px;">
                <p style="color: white; font-size: 48px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); margin: 0;">Match</p>
              </div>
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

          async function handleMouseUp(event) {
            isMouseDown = false;
            const currentX = startX - event.clientX;
          
            swipableImage.style.transform = 'translateX(0)';
          
            // Exécute la requête si le swipe est terminé
            if (!isSwipeEnded) {
              try {
                const response = await fetch(`${process.env.API_BASE_URL}/swipe`);
                const imageData = await response.json();
                swipableImage.src = imageData.photo;
                // imageData contient l'URL de l'image
                if (imageData) {
                  if (currentX < -50) {
                    if (user[0].category === 'fluffy') {
                        const fluffy = imageData.scoreFluffiness;
                        console.log(fluffy);
                        if (fluffy <= user[0].quizz_score) {
                            // Code du match pour la catégorie 'fluffy'
                            const userID = user[0].id_user;
                            const book = imageData.id_book;
                            document.getElementById('matchContainer').style.visibility = 'visible';
                            setTimeout(() => {
                                document.getElementById('matchContainer').style.visibility = 'hidden';
                            }, 1000);
                            try {
                                const options = {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ userID, book }),
                                };
                                console.log(options);
                                await fetch(`${process.env.API_BASE_URL}/swipe`, options);
                            } catch (error) {
                                console.error('Error modifying user:', error);
                                // Handle error here
                            }
                        }
                    } else if (user[0].category === 'dark') {
                        const dark = imageData.scoreDarkness;
                        console.log(dark);
                        if (dark <= user[0].quizz_score) {
                            // Code du match pour la catégorie 'dark'
                            const userID = user[0].id_user;
                            const book = imageData.id_book;
                            document.getElementById('matchContainer').style.visibility = 'visible';
                            setTimeout(() => {
                                document.getElementById('matchContainer').style.visibility = 'hidden';
                            }, 500);
                
                            try {
                                const options = {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ userID, book }),
                                };
                
                                console.log(options.body);
                                await fetch(`${process.env.API_BASE_URL}/swipe`, options);
                
                                if (!response.ok) {
                                    console.error('Error modifying user. Status:', response.status);
                                }
                            } catch (error) {
                                console.error('Error modifying user:', error);
                            }
                        }
                    }
                } 

                console.log('Image????????', imageData);
                console.log(currentX);
                console.log(user[0].category);
                console.log(imageData.scoreFluffiness);
                
                // Met à jour l'indicateur pour éviter d'autres requêtes

                isSwipeEnded = true;
              } else {
                console.error('Invalid image data received:', imageData);
              }
            } catch (error) {
              console.error('Error fetching image:', error);
            }
          } 
        }
      } else {
        console.log('Token has expired. Perform logout or other necessary actions.');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error checking token validity:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  } else {
      const main = document.querySelector('main');
      main.innerHTML = `
        <h1>You are not supposed to be here</h1>
      `;
      console.log('user not connected ?');
  }
};
export default Swipe;
