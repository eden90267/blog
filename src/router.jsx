import LandingPage from "./components/LandingPage";
import Blog from "./components/Blog";
import Article from "Source/components/Article";

const routes = [
  {
    path: '/',
    exact: true,
    component: LandingPage
  },
  {
    path: '/blog',
    exact: true,
    component: Blog
  }
  ,
  {
    path: '/blog/:id',
    exact: true,
    component: Article
  }
];

export default routes;