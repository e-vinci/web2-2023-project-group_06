import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import LogInPage from '../Pages/LogInPage';
import NewPage from '../Pages/NewPage';
import SignUpPage from '../Pages/SignUpPage';
import AboutUsPage from '../Pages/AboutUs';
import ProfilPage from '../Pages/ProfilPage';
import BookPropositionPage from '../Pages/BookPropositionPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/login': LogInPage,
  '/signup': SignUpPage,
  '/about' : AboutUsPage,
  '/profil': ProfilPage,
  '/proposition' : BookPropositionPage
};

export default routes;
