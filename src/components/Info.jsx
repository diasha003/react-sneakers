import React from "react";
import { Link } from "react-router-dom";

const Info = ({ title, description, imageURL }) => {
  return (
    <div className="d-flex flex-column align-center statusCart">
      <img
        width={120}
        height={120}
        src={imageURL}
        alt="cart"
        className="mb-5"
      ></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/">
        <button className="green_button">
          <img src="/img/arrow.svg" alt="arrow" className="arrowBack"></img>
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default Info;
