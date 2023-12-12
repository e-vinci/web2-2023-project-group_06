/* eslint-disable no-console */
// eslint-disable-next-line import/no-cycle
import routes from '../Router/routes';
import { usePathPrefix } from '../../utils/path-prefix'; // Adjust the path based on the actual location of your path-prefix file

const LogInPage = () => {
  const main = document.querySelector('main');

  const handleNavigation = (uri) => {
    const componentToRender = routes[uri];
    if (!componentToRender) throw Error(`The ${uri} resource does not exist.`);
    componentToRender();
    window.history.pushState({}, '', usePathPrefix(uri));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Handling login...');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const form = document.getElementById('loginForm');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('Server Response:', response);

      if (!response.ok) {
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      }

      const { userFound, hashedPassword, error, field } = await response.json();

      if (userFound && userFound.length > 0) {
        console.log('Login successful:', userFound);
        console.log('Hashed Password:', hashedPassword);

        // AJOUTER DANS LOCALSTORAGE (chuqi)
        localStorage.setItem('user', JSON.stringify(userFound));

        // Redirect to the home page
        console.log('REDIRECT TO / HOMEPAGE ?');
        window.location.href = '/';
      } else {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
        errorMessage.textContent = error === 'Invalid credentials' && field === 'password'
        ? 'Not the correct password'
        : 'Bad email';
        form.appendChild(errorMessage);
      }
    } catch (error) {
      console.log('Server error message:', error.message);
      console.log('Client-side error:', error);
    }
  };

  main.innerHTML = `
    <header class="text-center"><div id="navbarWrapper"></div>
        <h1>Welcome to Boonder</h1>
    </header>

    <div class="container login-container">
      <form id="loginForm">
        <div class="col-lg-4 mx-auto">
          <div class="form-group">
            <input type="text" name="email" class="form-control mb-2" id="email" placeholder="Email address">
          </div>
        </div>
        <div class="col-lg-4 mx-auto">
          <div class="form-group">
            <input type="password" name="password" class="form-control mb-2" id="password" placeholder="Password">    
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-block btn-light myButton">Login</button>
          <p>Not a member ? <a href="#" tagName="myButton" class="myButton" data-uri="/signup">Sign up</a></p>
          <div id="errorContainer" class="text-danger"></div>
        </div>
      </form>
    </div>
  `;
  const signupButton = document.querySelector('[data-uri="/signup"]');
  
  signupButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleNavigation('/signup');
  });

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', handleLogin);
};

export default LogInPage;

