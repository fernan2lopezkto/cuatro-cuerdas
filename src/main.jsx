import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx';
import ErrorPage from './error-page';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/cuatro-cuerdas",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cuatro-cuerdas/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />

  </React.StrictMode>,
)
