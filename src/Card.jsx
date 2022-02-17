import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 mx-auto " data-aos="fade-up">
        <div className="card my-5">
          <img
            src={props.imgsrc}
            className="Cardsize"
            alt={props.imgsrc}
            loading="lazy"
          />
        </div>
        <h5 className="card-title mt-3">{props.title}</h5>
        <p className="cardRole ">{props.para}</p>
      </div>
    </>
  );
};

export default Card;
