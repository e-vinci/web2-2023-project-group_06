import logoImage from '../../img/Boonder_logo.png';



const HomePage = () => {
  const main = document.querySelector('main');
  
  const mainfiller = `
  <div class="text-center">
    <h1 class="display-1">Welcome to </h1> 

    <h1 class="display-3">Boonder</h1> <br>

    <h2>The place to meet new books</h2> 

    <h3>Like Swipe Match</h3>

    <img src="${logoImage}" alt="logo" class="image-fluid w-25" > 
    <br><br><br>

    <div class="mb-3">
      <button type="button" class="btn btn-light myButton">
        <a class="nav-link" href="#" data-uri="/login">Login</a>
      </button>
    </div>

    <div class="mb-3">
      New here ? 
      <button type="button" class="btn btn-light myButton">
        <a class="nav-link" href="#" data-uri="/signup">Sign up</a>
      </button>
    </div>


    <footer class= "bottom">
      <div class="mb-2">
        <button type="button" class="btn btn-light myButton">
          <a class="nav-link" href="#" data-uri="/about">About Us</a>
        </button><br>
        
        <p>Made by beautiful people</p>
        <br>
      </div> 
    </footer>
  </div>
`;

  main.innerHTML = mainfiller;

};


export default HomePage;
