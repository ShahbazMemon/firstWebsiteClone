import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
// import image1 from "../src/images/homeImages/home1.png";

export const CommonPage = (props) => {
  return (
    <>
      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 home-left order-2 order-lg-1">
              <div className="grow-your">
                <h3>
                  {props.heading} <span>{props.per}</span>
                </h3>
                <p>{props.pera}</p>
                <div>
                  <NavLink to={props.visit}>
                    <Button className="get-started">{props.butt}</Button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 order-1 order-lg-2"
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <img
                src={props.imag}
                className="img-fluid animated"
                alt="buisness image"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonPage;
