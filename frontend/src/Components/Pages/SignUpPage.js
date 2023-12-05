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
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if(password !== confirmPassword){
        throw new Error('Passwords are not the same !')
      }
  
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password}),
        });
  
        if (!response.ok) {
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
  