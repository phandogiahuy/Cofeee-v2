import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Story from "../pages/Story";
import Area from "../pages/Story/Area";
import Roaster from "../pages/Story/Roaster";
import Shop from "../pages/Story/Shop";
import Contact from "../pages/Contact";
import Library from "../pages/Library";

const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/story",
    element: <Story />,
  },
  {
    path: "/story/area",
    element: <Area />,
  },
  {
    path: "/story/roaster",
    element: <Roaster />,
  },
  {
    path: "/story/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/library",
    element: <Library />,
  },
];
const routes = route.map((e) => ({ ...e, errorElement: <ErrorPage /> }));

export const router = createBrowserRouter(routes);
