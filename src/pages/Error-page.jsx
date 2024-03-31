import { useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar />
      <h1>Oops!</h1>
      <p>Perdon, ocurrio un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Footer />
    </div>
  );
}
