import React from 'react'
import "./Card.css"

function Card({title="Sin titulo", description="Sin ninguna descripcion"}) {
  return (
    <div className='Card'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card