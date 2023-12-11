/* eslint-disable no-console */

const LogInPage = () => {
  const main = document.querySelector('main');

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
        if (hashedPassword === null) {
          // Handle incorrect password
          const errorMessage = document.createElement('div');
          errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
          errorMessage.textContent = 'Not the correct password';
          form.appendChild(errorMessage);
          return;
        }
        console.log('Login successful:', userFound);
        console.log('Hashed Password:', hashedPassword);
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

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', handleLogin);
};

export default LogInPage;
/*
      const form = document.getElementById('loginForm');

      if (password.test(password)) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
        errorMessage.textContent = 'Bad Password';
        form.appendChild(errorMessage);
        return;
      }
      */
