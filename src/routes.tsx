import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./_layouts/app";
import { NotFound } from "./pages/404";
import { Home } from "./pages/app/home";
import { Stock } from "./pages/stock";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stock",
        element: <Stock />,
      },
    ],
  },
]);
