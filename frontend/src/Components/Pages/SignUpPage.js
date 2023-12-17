/* eslint-disable no-console */
const SignUpPage = () => {
  const main = document.querySelector('main');
  const mainfillerWithToggle = `
     
<header class="text-center">
<div id="navbarWrapper"></div>    
<h1>Welcome to Boonder</h1>
</header>

<div class="container mt-5">
<div class="row justify-content-md-center">
  <div class="col-md-6">
    <form id="signup-form" class="needs-validation" novalidate>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name" required>
          <div class="invalid-feedback">
            Please provide your name.
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="surname" class="form-label">Surname</label>
          <input type="text" class="form-control" id="surname" placeholder="Surname" required>
          <div class="invalid-feedback">
            Please provide your surname.
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Email address" required>
        <div class="invalid-feedback">
          Please provide a valid email.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <div class="input-group">
          <input type="password" class="form-control" id="password" placeholder="Password" minlength="8" pattern="^(?=.*[A-Z])(?=.*[0-9]).*$" required>
          <button class="btn btn-outline-secondary" type="button" id="togglePasswordBtn">
            Show/Hide
          </button>
        </div>
        <div class="invalid-feedback">
          Your password does not meet the requirements!
        </div>
        <div class="form-text">
          Your password must be at least 8 characters long with at least 1 uppercase letter and 1 alphanumeric character.
        </div>
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Password Confirmation</label>
        <input type="password" class="form-control" id="confirmPassword" placeholder="Password Confirmation" required>
        <div class="invalid-feedback">
          Passwords do not match.
        </div>
        <div id="errorContainer" class="mt-3"></div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary btn-block myButton">Sign Up</button>
      </div>
    </form>
  </div>
</div>
</div>
    <script src="Router.js"></script>
  `;

  main.innerHTML = mainfillerWithToggle;

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      confirmPasswordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
      confirmPasswordInput.type = 'password';
    }
  };

  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  togglePasswordBtn.addEventListener('click', togglePasswordVisibility);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginInput = document.getElementById('email');
    const login = loginInput.value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    const form = document.getElementById('signup-form');

    if (form.checkValidity() === false) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(login)) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
      errorMessage.textContent = 'Make sure the login is in the format of a valid email address!';
      form.appendChild(errorMessage);
      return;
    }

    if (password !== confirmPassword) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
      errorMessage.textContent =
        'Password entry and confirmation do not match!';
      form.appendChild(errorMessage);
      return;
    }

    if (!login || !password) {
      console.error("Email and password are required !");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
      errorMessage.textContent =
        'Your password must be at least 8 characters long, with at least 1 capital letter and 1 number.';
      form.appendChild(errorMessage);
      return;
    }

    try {
      const errorContainer = document.getElementById('errorContainer');
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password, name, surname }),
      };
      const response = await fetch(`${process.env.API_BASE_URL}/users/createUser`, option);

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        if (errorData.error === 'Failed to create user') {
          const errorMessage = document.createElement('div');
          errorMessage.classList.add('alert', 'alert-danger');
          errorMessage.textContent = 'This email has already been assigned to an account.';

          errorContainer.innerHTML = '';

          errorContainer.appendChild(errorMessage);
        }
        throw new Error('Failed to create user');
      }

      window.location.href = '/login';
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const form = document.getElementById('signup-form');
  form.addEventListener('submit', handleSubmit);
};

export default SignUpPage;