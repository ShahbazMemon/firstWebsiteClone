import React from "react";
import Image from "../imgComponent/Image";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <Image imgs={props.pic} cl="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text"> {props.cardText}</p>
          <NavLink to="/" className="btn btn-primary">
            {props.pres}
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Card;
