import { removePathPrefix, usePathPrefix } from '../../utils/path-prefix';
import routes from './routes';

const Router = () => {
  onFrontendLoad();
  onNavBarClick();
  onHistoryChange();
  onImageSwipe();
  // onButtonClick();
  // onPasswordClick();
};

function onNavBarClick() {
  const navbarWrapper = document.querySelector('#navbarWrapper');

  navbarWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    const navBarItemClicked = e.target;
    const uri = navBarItemClicked?.dataset?.uri;
    if (uri) {
      const componentToRender = routes[uri];
      if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);

      componentToRender();
      window.history.pushState({}, '', usePathPrefix(uri));
    }
  });
}

function onHistoryChange() {
  window.addEventListener('popstate', () => {
    const uri = removePathPrefix(window.location.pathname);
    const componentToRender = routes[uri];
    componentToRender();
  });
}

function onImageSwipe() {
  // eslint-disable-next-line no-unused-vars
  let clickStart = 0;
  let clickEnd = 0;
  const swipable = document.getElementById("swipable");


  function checkDirection(){
    if(clickEnd > 0 )
      document.getElementsByClassName("swipe")[0].click();

    if(clickEnd > 0 )
    document.getElementsByClassName("swipe")[1].click();
  }

  
  swipable.addEventListener("mousedown", (e) => {
    clickStart = e.changedTouches[0].screen;
  });

  swipable.addEventListener("mouseup", (e) => {
    clickEnd = e.changedTouches[0].screen;
    checkDirection();
  });
}

function onFrontendLoad() {
  window.addEventListener('load', () => {
    const uri = removePathPrefix(window.location.pathname);
    const componentToRender = routes[uri];
    if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);

    componentToRender();
  });
}

/*
function onButtonClick() {
  document.getElementById('loginButton').addEventListener('click', (event) => {
    event.preventDefault();
  })
}
*/
/* devrait rendre le pwd visible
function onPasswordClick() {
  document.getElementById('togglePassword').addEventListener('click', () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });
}
*/

export default Router;
