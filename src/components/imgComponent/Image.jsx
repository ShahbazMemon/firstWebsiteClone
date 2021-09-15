import React from "react";

const Image = (props) => {
  return (
    <>
      <img src={props.imgs} className={props.cl} alt="as" />
    </>
  );
};

export default Image;
