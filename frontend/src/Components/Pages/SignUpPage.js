const SignUpPage = () => {
  const main = document.querySelector('main');
  const mainfiller = `
    <header class="text-center">
      <div id="navbarWrapper"></div>    
      <h1>Welcome to Boonder</h1>
    </header>
    <div class="container login-container">
      <form id="signup-form">
        <div class="col-lg-4 mx-auto">
          <div class="form-group">
            <input type="text" class="form-control mb-2" id="email" placeholder="Email address">
          </div>
        </div>
        <div class="col-lg-4 mx-auto">
          <div class="form-group">
            <input type="password" class="form-control mb-2" id="password" placeholder="Password">
          </div>
        </div>
        <div class="col-lg-4 mx-auto">    
          <div class="form-group">
            <input type="password" class="form-control mb-2" id="confirmPassword" placeholder="Password Confirmation">
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-block btn-light myButton">Sign Up</button>
        </div>
      </form>
    </div>
    <script src="Router.js"></script>
  `;
  
  main.innerHTML = mainfiller;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginInput = document.getElementById('email');
    const login = loginInput.value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    console.log(login, password);

    // Vérifier si le login est un email valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(login)) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger');
      errorMessage.textContent = 'Le login doit être un email valide !';

      const form = document.getElementById('signup-form');
      form.insertAdjacentElement('afterend', errorMessage);

      return;
    }

    if (password !== confirmPassword) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger');
      errorMessage.textContent = 'La saisie du mot de passe et sa confirmation ne correspondent pas !';

      const form = document.getElementById('signup-form');
      form.insertAdjacentElement('afterend', errorMessage);

      return;
    }

    if (!login || !password) {
      console.error('Email and password are required!');
      return;
    }

    try {
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      };
      const response = await fetch('/api/users/createUser', option);
      console.log("vous êtes ici ...");
      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      window.location.href = '/login';
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error here
    }
  };

  const form = document.getElementById('signup-form');
  form.addEventListener('submit', handleSubmit);
};

export default SignUpPage;
