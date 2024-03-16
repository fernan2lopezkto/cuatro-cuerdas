import { Link } from "react-router-dom";

function Card({ name="Sin Nombre", path = "titulo por defecto", description = "descripcion por defecto", image = "imagen" }) {
  return (
    <div className="Card">
      <h2>
        <Link to={"/cuatro-cuerdas/tutoriales/" + path}>
        {name}
        </Link>
      </h2>
      <p>{description}</p>
      <img src={image} alt={name + " image"} />

    </div>
  );
}

export default Card;
