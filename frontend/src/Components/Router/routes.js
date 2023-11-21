import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import LogInPage from '../Pages/LogInPage';
import NewPage from '../Pages/NewPage';
import SignUpPage from '../Pages/SignUpPage';
import AboutUsPage from '../Pages/AboutUs';
import ProfilPage from '../Pages/ProfilPage';
import BookPropositionPage from '../Pages/BookPropositionPage';
import ListBookProposition from '../Pages/ListBookProposition';
import BookPage from '../Pages/BookPage';
import BookPageLinkWithApiBETA from '../Pages/BookPageLinkWithApiBETA';
import MatchList from '../Pages/MatchList';

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
  '/books' : BookPageLinkWithApiBETA


};

export default routes;
