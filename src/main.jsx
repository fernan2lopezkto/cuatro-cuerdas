import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import tutorials from './data/tutorials.js'
import TutorialView from './views/TutorialView.jsx'

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

tutorials.forEach((tutorial) => {
  routes.push({
    path: tutorial.name,
    element: <TutorialView vehicle={tutorial} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);