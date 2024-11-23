import React from "react";


const CardShoow = (props) => {
    const {image, name} = props.data;
    return (
      <div className="card">
        <img src={image} />
        <div className="title">{name}</div>
      </div>
    );
  }

export default CardShoow;