import React from "react";
import PropTypes from "prop-types";


export const Card = (props) =>{
    return (
       <div className="card col-lg-3 col-md-6 col-xs-12 p-0">
         <img src={props.imagen} className="card-img-top" alt=""/>
        <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.descripcion}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
};

Card.propTypes = {
    imagen: PropTypes.string,
    titulo: PropTypes.string,
    descripcion: PropTypes.string
};