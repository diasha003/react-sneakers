import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIdAdded] = React.useState(false);

  const onClickPlus = () => {
    isAdded ? setIdAdded(false) : setIdAdded(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          width={50}
          height={50}
          src="/img/unliked.svg"
          alt="unliked"
          onClick={props.onClickFavorite}
        ></img>
      </div>
      <img width={133} height={112} src={props.imageURL}></img>
      <p>{props.title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price}</b>
        </div>
        <img
          className="button"
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
          onClick={onClickPlus}
        ></img>
      </div>
    </div>
  );
}

export default Card;
