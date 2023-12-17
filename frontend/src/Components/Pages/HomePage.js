/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import anime from 'animejs/lib/anime.es.js';
import logoImage from '../../img/boonder_advanced_logo.png';
// eslint-disable-next-line import/no-cycle
import routes from '../Router/routes';
import { usePathPrefix } from '../../utils/path-prefix'; // Adjust the path based on the actual location of your path-prefix file
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const HomePage = () => {
  const main = document.querySelector('main');

  const handleNavigation = (uri) => {
    const componentToRender = routes[uri];
    if (!componentToRender) throw Error(`The ${uri} resource does not exist.`);
    componentToRender();
    window.history.pushState({}, '', usePathPrefix(uri));
  };

    // l'élément dans localstorage
    const user = JSON.parse(localStorage.getItem('user'));

  if(user) {
    main.innerHTML = `
    <div id="privacyPolicyWrapper"></div>
      <div class="text-center">
        <h1 class="display-1">Welcome to </h1> 
        <h1 class="display-3">Boonder</h1> <br>
        <h2>The place to meet new books</h2> 
        <h3>Like Swipe Match</h3>
  
        <div id="logoo">
        <img src="${logoImage}" alt="logo" class="image-fluid w-25" > 
        </div>
        <br><br><br>
        <footer class="bottom">
          <div class="mb-2">
            <a href="#" class="btn btn-light myButton" data-uri="/about">About Us</a><br>
            <p>Made by beautiful people</p>
            <br>
          </div> 
        </footer>
      </div>`;

      const aboutButton = document.querySelector('[data-uri="/about"]');
      aboutButton.addEventListener('click', (event) => {
        event.preventDefault();
        handleNavigation('/about');
      });
  } else {
  main.innerHTML = `
  <div id="privacyPolicyWrapper"></div>
    <div class="text-center">
      <h1 class="display-1">Welcome to </h1> 
      <h1 class="display-3">Boonder</h1> <br>
      <h2>The place to meet new books</h2> 
      <h3>Like Swipe Match</h3>

      <div id="logoo">
      <img src="${logoImage}" alt="logo" class="image-fluid w-25" > 
      </div>
      <br><br><br>

     <div class="mb-3">
        <a href="#" class="btn btn-light myButton" data-uri="/login">Login</a>
      </div>

      <div class="mb-3">
        New here ? 
        <a href="#" class="btn btn-light myButton" data-uri="/signup">Sign up</a>
      </div>
    
      <footer class="bottom">
        <div class="mb-2">
          <a href="#" class="btn btn-light myButton" data-uri="/about">About Us</a><br>
          <p>Made by beautiful people</p>
          <br>
        </div> 
      </footer>
    </div>

  `;

  const loginButton = document.querySelector('[data-uri="/login"]');
  const signupButton = document.querySelector('[data-uri="/signup"]');
  const aboutButton = document.querySelector('[data-uri="/about"]');

  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleNavigation('/login');
  });

  signupButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleNavigation('/signup');
  });

  aboutButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleNavigation('/about');
  });
}

  PrivacyPolicy();

  const logoo = document.querySelector('#logoo');
  logoo.addEventListener('click', () => {
    anime({
      targets: logoo,
      rotate: '20turn',
      duration: 800,
      easing: 'easeInOutSine',
      loop : true,
    });
  });

};

export default HomePage;
