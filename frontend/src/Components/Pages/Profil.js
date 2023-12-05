async function ProfilUser() {
    const main = document.querySelector('main');

    const response = await fetch('/api/listUsers');
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const data = await response.json();

    main.innerHTML = `
    <div class="container mt-5">
    <div class="card">
      <div class="row">
        <div class="col-md-4">
          <img src="lien_vers_la_photo" class="img-fluid rounded-circle m-3" alt="Photo de profil">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data[0].name} ${data[0].surname}</h5>
            <p>Description du profil :</p>
            <div class="card">
                <div class="card-body">
                    <p class="card-text"> ${data[0].profile_description} </p>
                </div>
            </div>
            <p class="card-text"><small class="text-muted">Catégorie : ${data[0].category}</small></p>
            <p class="card-text">Score :<span class="badge badge-success">${data[0].quizz_score}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `


}




export default ProfilUser;