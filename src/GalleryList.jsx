import React from "react";

const GalleryList = ({ selectGal, currentval }) => {
  return (
    <>
      <div className="menu-tab d-flex justify-content-around">
        {currentval.map((valu, index) => {
          return (
            <button
              className="btn btn-warning"
              key={index}
              onClick={() => selectGal(valu)}
            >
              {valu}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default GalleryList;
