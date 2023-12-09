import { removePathPrefix, usePathPrefix } from '../../utils/path-prefix';
import routes from './routes';

const Router = () => {
  onFrontendLoad();
  onNavBarClick();
  onHistoryChange();
  onButtonClick();
  // onPasswordClick();
};

function onButtonClick() {
  document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('myButton') && event.target.dataset.uri) {
      event.preventDefault();
      const {uri} = event.target.dataset;
      navigateTo(uri);
    }
  })
}

function onNavBarClick() {
  const navbarWrapper = document.querySelector('#navbarWrapper');

  navbarWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    const navBarItemClicked = e.target;
    const uri = navBarItemClicked?.dataset?.uri;
    if (uri) {
      navigateTo(uri);
    }
  });
}

function onHistoryChange() {
  window.addEventListener('popstate', () => {
    const uri = removePathPrefix(window.location.pathname);
    navigateTo(uri);
  });
}

function onFrontendLoad() {
  window.addEventListener('load', () => {
    const uri = removePathPrefix(window.location.pathname);
    navigateTo(uri);
  });
}

function navigateTo(uri) {
  const componentToRender = routes[uri];
  if (!componentToRender) throw Error(`The ${uri} resource does not exist.`);

  componentToRender();
  window.history.pushState({}, '', usePathPrefix(uri));
}

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
