import React from "react";
import ReactDOM from "react-dom/client";

import About from "./pages/About.jsx";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import TutorialsGallery from "./pages/TutorialsGallery"
import TutorialPage from "./pages/TutorialPage.jsx";

import NotFound from "./pages/NotFound.jsx";
import ErrorPage from "./pages/Error-page";

import tutorials from "./data/tutorials.js";

import "./index.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/cuatro-cuerdas",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cuatro-cuerdas/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cuatro-cuerdas/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cuatro-cuerdas/tutoriales",
    element: <TutorialsGallery />,
    errorElement: <ErrorPage />,
  },
]

tutorials.forEach((tutorial) => {
  routes.push({
    path: "/cuatro-cuerdas/tutoriales/" + tutorial.path,
    element: <TutorialPage tutorial={tutorial}/>,
    errorElement: <ErrorPage />,
  })
})

routes.push(
  {
    path: "/cuatro-cuerdas/*",
    element:
      <NotFound />,
    errorElement: <ErrorPage />,
  },
)

const router = createBrowserRouter(routes);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
