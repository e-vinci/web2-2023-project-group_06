/* eslint-disable no-console */
const LogInPage = () => {
  const main = document.querySelector('main');

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Handling login...');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      }

      const userFound = await response.json();

      if (userFound.length > 0) {
        console.log('Login successful:', userFound);
        // Redirect to the home page
        window.location.href = '/';
      } else {
        console.log('Invalid email or password');
        // Handle unsuccessful login, e.g., show an error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error, e.g., show an error message
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
          <p>Not a member ? <a href="#" data-uri="/signup">Sign up</a></p>
        </div>
      </form>
    </div>
  `;

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', handleLogin);
};

export default LogInPage;
