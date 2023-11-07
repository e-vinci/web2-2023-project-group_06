import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import LogInPage from '../Pages/LogInPage';
import NewPage from '../Pages/NewPage';
import SignInPage from '../Pages/SignInPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/login': LogInPage,
  '/signin': SignInPage,
};

export default routes;
