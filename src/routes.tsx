import { createBrowserRouter } from "react-router-dom";
import { Home, Cart } from "./views";
import ErrorPage from "./views/ErrorPage";

export const routes = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/cart", element: <Cart /> },
]);
