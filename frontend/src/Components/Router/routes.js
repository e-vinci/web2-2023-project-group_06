/* eslint-disable import/no-cycle */
import HomePage from '../Pages/HomePage';
import LogInPage from '../Pages/LogInPage';
import SignUpPage from '../Pages/SignUpPage';
import AboutUsPage from '../Pages/AboutUs';
import ProfilPage from '../Pages/ProfilPage';
import BookPropositionPage from '../Pages/BookPropositionPage';
import BookPage from '../Pages/BookPage';
import MatchList from '../Pages/MatchList';
import BookPageLinkWithApiBETA from '../Pages/BookPageLinkWithApiBETA';
import Swipe from '../Pages/Swipe';
import Quizz from '../Pages/Quizz';
import User from '../Pages/User';
import ProfilUser from '../Pages/Profil';


const routes = {
  '/': HomePage,
  '/login': LogInPage,
  '/signup': SignUpPage,
  '/about' : AboutUsPage,
  '/profil': ProfilPage,
  '/proposition' : BookPropositionPage,
  '/book' : BookPage,
  '/matchList' : MatchList,
  '/books' : BookPageLinkWithApiBETA,
  '/swipe' : Swipe,
  '/quizz' : Quizz,
  '/listUsers' : User,
  '/profiluser' : ProfilUser

};

export default routes;
