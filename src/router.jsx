import LandingPage from "./components/LandingPage";
import Blog from "./components/Blog";

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
];

export default routes;