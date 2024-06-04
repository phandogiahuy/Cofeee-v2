import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";

const route = [
    {
      path: "/",
      element: <Home />,
    }
]
const routes = route.map((e) => ({ ...e, errorElement: <ErrorPage />  }));

export const router = createBrowserRouter(routes);