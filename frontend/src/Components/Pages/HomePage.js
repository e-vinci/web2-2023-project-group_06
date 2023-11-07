const HomePage = () => {
  const main = document.querySelector('main');
  
  const mainfiller = `
  <header class="text-center"><div id="navbarWrapper"></div>
        
        <h1>Welcome to Boonder</h1>
      </header>

      <div class="text-center">
        The place to meet new books <br>
        Like  Swipe Match <br>

        <a class="nav-link" href="/login">
        <button type="button" class="btn btn-primary">Login</button> <br>
        </a>
        <a class="nav-link" href="/signin">
        New here ? <button type="button" class="btn btn-primary">Sign in</button>
      </a>
        </div>
  `;

  main.innerHTML = mainfiller;


};


export default HomePage;
