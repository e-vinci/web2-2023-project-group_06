const HomePage = () => {
  const main = document.querySelector('main');
  
  const mainfiller = `
  <header class="text-center"><div id="navbarWrapper"></div>
    <h1>Welcome to Boonder</h1>
  </header>

      <div class="text-center">
        The place to meet new books <br>
        Like  Swipe Match <br>
        
        <button type="button" class="btn btn-primary">
          <a class="nav-link" href="/login">Login</a>
        </button> <br>
        
        New here ? 
        <button type="button" class="btn btn-primary">
          <a class="nav-link" href="/signin">Sign in</a>
        </button>
        
        <footer>
          <button type="button" class="btn btn-primary">
            <a class="nav-link" href="/about">About Us</a>
          </button>
          <br>
        </footer>
      </div>
  `;

  main.innerHTML = mainfiller;


};


export default HomePage;
