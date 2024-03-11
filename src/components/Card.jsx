import { Link } from "react-router-dom";
import "./Card.css"

function Card({ title = "titulo por defecto", description = "descripcion por defecto" }) {
  return (
    <div className="Card">
      <h2>
        <Link to={"/cuatro-cuerdas/tutoriales" +title}>
        {title}
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
