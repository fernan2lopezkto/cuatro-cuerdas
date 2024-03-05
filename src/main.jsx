import React from "react";
import ReactDOM from "react-dom/client";

import About from "./pages/About.jsx";
import ErrorPage from "./pages/Error-page";
import Home from "./pages/Home"
import "./index.css";
import Foot from "./components/Footer.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/cuatro-cuerdas",
    element: (
      <Home />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cuatro-cuerdas/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cuatro-cuerdas/contact",
    element: (
      <div>
        <h1>Contacto</h1>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cuatro-cuerdas/tutoriales",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cuatro-cuerdas/*",
    element: (
      <div>
        <h2>Pagina no encontrada</h2>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Foot />
  </React.StrictMode>
);
