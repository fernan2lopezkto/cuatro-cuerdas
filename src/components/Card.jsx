import { Link } from "react-router-dom";
import "./Card.css"

function Card({ name="Sin Nombre", path = "titulo por defecto", description = "descripcion por defecto" }) {
  return (
    <div className="Card">
      <h2>
        <Link to={"/cuatro-cuerdas/tutoriales/" + path}>
        {name}
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
