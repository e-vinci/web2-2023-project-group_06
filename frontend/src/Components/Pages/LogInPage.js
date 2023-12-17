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
    let form = document.getElementById('loginForm');

    try {
     const response = await fetch(`${process.env.API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('Server Response:', response);

      if (!response.ok) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('alert', 'alert-danger');
        errorMessage.textContent = `Incorrect email or password : Please check your email or password`;
        form = document.getElementById('loginForm');
        form.appendChild(errorMessage);
        setTimeout(() => {
          errorMessage.textContent = '';
          errorMessage.classList.remove('alert', 'alert-danger');
        }, 5000);
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      }
      
      const { token, userFound, hashedPassword } = await response.json();

      if (userFound && userFound.length > 0) {
        console.log('Login successful:', userFound);
        console.log('Hashed Password:', hashedPassword);
        console.log('LogInPage token:', token);

        // AJOUTER DANS LOCALSTORAGE (chuqi)
        localStorage.setItem('user', JSON.stringify(userFound));
        localStorage.setItem('token', JSON.stringify(token));

        const users = JSON.parse(localStorage.getItem('user'));
        const tokens = JSON.parse(localStorage.getItem('token'));
        console.log('LogInPage user : ', users);
        console.log('LogInPage token : ', tokens);
 

        // Redirect to the home page
        console.log('REDIRECT TO / HOMEPAGE ?');
        window.location.href = '/';
      }
    } catch (error) {
      console.log('Server error message:', error.message);
      console.log('Client-side error:', error);
    }
  }

  const mainFiller = `
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
            <div class="input-group">
              <input type="password" name="password" class="form-control mb-2" id="password" placeholder="Password" required>    
              <button class="btn btn-outline-secondary mb-2" type="button" id="togglePasswordBtn">
                Show/Hide
              </button>
            </div>
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
  main.innerHTML = mainFiller;

  const signupButton = document.querySelector('[data-uri="/signup"]');
  
  signupButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleNavigation('/signup');
  });

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  togglePasswordBtn.addEventListener('click', togglePasswordVisibility);

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', handleLogin);
};

export default LogInPage;

// pour Chuqi