/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');

  // l'élément dans localstorage
  let user = localStorage.getItem('user');
  let admin = false;

if(user){
  [user] = JSON.parse(user); // équivalent à user = JSON.parse(user)[0]; changement à cause de eslint
  if(user && user.is_admin){
    admin = true;
  }
}

  
    console.log(`admin est : ${admin}`);

  const navbar = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#" data-uri="/">Boonder</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              ${user ? ` 
                <li class ="nav-item">
                  <a class="nav-link" href="#" data-uri="/quizz"> Quizz (temporaire)</a>
                </li>
                <li class ="nav-item">
                  <a class="nav-link" href="#" data-uri="/swipe"> swipe (Alpha testing in progress)</a>
                </li>
              </li>` : ''}
              ${admin ? `<li class="nav-item">
                <li class ="nav-item">
                  <a class="nav-link" href="#" data-uri="/listUsers"> listUsers</a>
                </li>
                <li class ="nav-item">
                  <a class="nav-link" href="#" data-uri="/books"> Liste des livres crée par défaut (BETA)</a>
                </li>
              </li>` : ''}
            ${user && !admin ? `<li class="nav-item">
              <li class ="nav-item">
                <a class="nav-link" href="#" data-uri="/profiluser"> User Profil</a>
              </li>
              <li class ="nav-item">
                <a class="nav-link" href="#" data-uri="/matchList"> Match List</a>
              </li>
            </li>` : ''}
            ${user ? `
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <button class="btn btn-primary myButton" style="font-size:20px; padding:10px 20px; border-radius:12px; background-color: #007bff; border-color: #007bff; color: white; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
                  log out ヾ(￣▽￣)Bye~Bye~
                </button>
              </li>
            </ul>` : ''}
          </ul>
        </div>
      </div>
    </nav>
  `;
  navbarWrapper.innerHTML = navbar;

 const logoutButton = document.querySelector('.myButton');
 if (logoutButton) {
   logoutButton.addEventListener('click', (event) => {
    event.preventDefault();
     console.log('déconnexion');
     localStorage.removeItem('user');
     localStorage.removeItem('token');
     window.location.href = '/';
     Navbar();
   });
 }
};


export default Navbar;
