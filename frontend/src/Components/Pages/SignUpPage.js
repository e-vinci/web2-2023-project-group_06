const SignUpPage = () => {
  const main = document.querySelector('main');
  const mainfiller = `
    <header class="text-center">
      <div id="navbarWrapper"></div>    
      <h1>Welcome to Boonder</h1>
    </header>
    <div class="container mt-5">
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <form id="signup-form" class="needs-validation" novalidate>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Email address" required>
              <div class="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" minlength="8" pattern="^(?=.*[A-Z])(?=.*[0-9]).*$" required>
              <div class="invalid-feedback">
                Votre mot de passe n'est pas conforme avec les conditions !
              </div>
              <div class="form-text">
                Votre mot de passe doit avoir au moins 8 caractères dont 1 majuscule et 1 caractère alphanumérique
              </div>
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Password Confirmation</label>
              <input type="password" class="form-control" id="confirmPassword" placeholder="Password Confirmation" required>
              <div class="invalid-feedback">
                Passwords do not match.
              </div>
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
  
  main.innerHTML = mainfiller;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginInput = document.getElementById('email');
    const login = loginInput.value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

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
      errorMessage.textContent = 'Le login doit être un email valide !';
      form.appendChild(errorMessage);
      return;
    }

    if (password !== confirmPassword) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
      errorMessage.textContent = 'La saisie du mot de passe et sa confirmation ne correspondent pas !';
      form.appendChild(errorMessage);
      return;
    }

    if (!login || !password) {
      console.error("L'email et mot de passe sont requis !");
      return;
    }

    // Vérifier les critères du mot de passe
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
      errorMessage.textContent = 'Votre mot de passe doit avoir au moins 8 caractères avec au minimum 1 majuscule et 1 chiffre.';
      form.appendChild(errorMessage);
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

      if (!response.ok) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('alert', 'alert-danger', 'mt-3');
        errorMessage.textContent = 'Cet email existe deja !';
        form.appendChild(errorMessage);
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
