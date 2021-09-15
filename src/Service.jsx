import React from "react";
import Card from "./components/serviesCards/Card";
import Cards from "./components/serviesCards/Cards";

const Service = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="text-center mt-5">
          <h1>Our Services</h1>
        </div>
        <div className="row">
          {Cards.map((val) => {
            return (
              <>
                <div className="col-md-4 col-10 mx-auto mt-5">
                  <Card
                    pic={val.pic}
                    cardTitle={val.cardTitle}
                    cardText={val.cardText}
                    pres={val.pres}
                    key={val.id}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
