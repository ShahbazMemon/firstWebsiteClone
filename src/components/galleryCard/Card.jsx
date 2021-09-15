import React from "react";

export const Card = (props) => {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4  gy-5 ">
        <div
          className="row g-0 card outer"
          style={{ borderRadius: "26px", flexDirection: "row" }}
        >
          <div className="col-md-4" style={{ display: "inherit" }}>
            <img src={props.im} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "1.3em", fontFamily: "inherit" }}
              >
                {props.na}
              </h5>
              <p className="card-text" style={{ fontFamily: "initial" }}>
                {props.dic}
              </p>
              <div
                className="pricing"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  className="card-text"
                  style={{
                    fontFamily: "cursive",
                    marginBottom: "0px",
                    padding: "7px 0px",
                  }}
                >
                  Price: <span> {props.pri}</span>
                </p>
                <button className="btn btn-primary order-btn">Order Now</button>
              </div>
              <p
                className="card-text muted-text"
                style={{ fontSize: ".7em", paddingTop: "8px" }}
              >
                This is a wider card with supporting text below as.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
