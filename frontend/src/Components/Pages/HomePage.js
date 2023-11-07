const HomePage = () => {
  const main = document.querySelector('main');
  
  const mainfiller = `
  <div class="text-center">
  The place to meet new books <br>
  Like Swipe Match <br>
  <button type="button" class="btn btn-primary">
    <a class="nav-link" href="/login">Login</a>
  </button>
  <br>
  <button type="button" class="btn btn-primary">
    <a class="nav-link" href="/signin">Sign in</a>
  </button>
</div>
<footer>
  <button type="button" class="btn btn-primary">
    <a class="nav-link" href="/about">About Us</a>
  </button>
  <br>
</footer>

  `;

  main.innerHTML = mainfiller;


};


export default HomePage;
