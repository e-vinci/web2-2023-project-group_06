/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import anime from 'animejs/lib/anime.es.js'; 

async function ProfilUser() {
  
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
        console.log(user);
        console.log(user.profile_picture)

        const main = document.querySelector('main');

        main.innerHTML = `
          <div class="container mt-5">
            <div class="card">
              <div class="row">
                <div class="col-md-4">
                  <img src="${user[0].profile_picture}" class="img-fluid rounded-circle m-3" alt="Photo de profil" id="profilePicture">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${user[0].name} ${user[0].surname}</h5>
                    <p>Description du profil :</p>
                    <div class="card">
                      <div class="card-body">
                        <p class="card-text"> ${user[0].profile_description} </p>
                      </div>
                    </div>
                    <p class="card-text"><small class="text-muted">Catégorie : ${user[0].category}</small></p>
                    <p class="card-text">Score :<span class="badge badge-success">${user[0].quizz_score}</span></p>
                  </div>
                </div>
              </div>
              <div class="card-footer text-right">
                <a href="/profil" class="btn btn-light myButton">Modifier Profil</a>
              </div>
            </div>
          </div>
        `;

        anime({
          targets: '.card',
          translateX: 100, // déplace l'élément de 250px sur l'axe X
          duration: 500, // durée de l'animation en millisecondes
          easing: 'easeInOutQuad', // fonction d'assouplissement pour une transition en douceur
          direction: 'alternate', // l'animation revient à son état initial
        });
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
}

export default ProfilUser;
