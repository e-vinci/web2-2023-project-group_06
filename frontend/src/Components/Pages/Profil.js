// eslint-disable-next-line import/extensions
import anime from 'animejs/lib/anime.es.js'; 

async function ProfilUser() {
  
  const user = JSON.parse(localStorage.getItem('user'))[0];
  if (!user) {
    console.log(user);
    console.log(user.profile_picture)

    const main = document.querySelector('main');

    main.innerHTML = `
    <div class="container mt-5">
    <div class="card">
      <div class="row">
        <div class="col-md-4">
          <img src="${user.profile_picture}" class="img-fluid rounded-circle m-3" alt="Photo de profil" id="profilePicture">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${user.name} ${user.surname}</h5>
            <p>Description du profil :</p>
            <div class="card">
              <div class="card-body">
                <p class="card-text"> ${user.profile_description} </p>
              </div>
            </div>
            <p class="card-text"><small class="text-muted">Catégorie : ${user.category}</small></p>
            <p class="card-text">Score :<span class="badge badge-success">${user.quizz_score}</span></p>
          </div>
        </div>
      </div>
      <div class="card-footer text-right">
        <a href="#" class="btn btn-light myButton" data-uri="/profil">Modifier Profil</a>
      </div>
    </div>
  </div>
  
    `;

    anime({
      targets: '.card',
      scale: [1, 1.05],
      rotate: '50turn',
      direction: 'normal',
      easing: 'linear',
      duration: 2000
    });

  } else {
      const main = document.querySelector('main');
      main.innerHTML = `
              <h1>You are not supposed to be here</h1>
              `;
      console.log('user not connected ?');
  }
}

export default ProfilUser;
