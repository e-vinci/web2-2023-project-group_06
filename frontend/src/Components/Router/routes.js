import GamePage from '../Pages/GamePage';
// eslint-disable-next-line import/no-cycle
import HomePage from '../Pages/HomePage';
import LogInPage from '../Pages/LogInPage';
import NewPage from '../Pages/NewPage';
import SignUpPage from '../Pages/SignUpPage';
import AboutUsPage from '../Pages/AboutUs';
import ProfilPage from '../Pages/ProfilPage';
import BookPropositionPage from '../Pages/BookPropositionPage';
import ListBookProposition from '../Pages/ListBookProposition';
import BookPage from '../Pages/BookPage';
import MatchList from '../Pages/MatchList';
import BookPageLinkWithApiBETA from '../Pages/BookPageLinkWithApiBETA';
import Swipe from '../Pages/Swipe';
import Quizz from '../Pages/Quizz';
import User from '../Pages/User';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/login': LogInPage,
  '/signup': SignUpPage,
  '/about' : AboutUsPage,
  '/profil': ProfilPage,
  '/proposition' : BookPropositionPage,
  '/listpropositions' : ListBookProposition,
  '/book' : BookPage,
  '/matchList' : MatchList,
  '/books' : BookPageLinkWithApiBETA,
  '/swipe' : Swipe,
  '/quizz' : Quizz,
  '/listUsers' : User

};

export default routes;
