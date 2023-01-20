import React from "react";
import styles from "./Card.module.scss";

function Card({
  item,
  key,
  favoriteItems = [],
  imageURL,
  title,
  price,
  onClickFavorite,
  onPlus,
}) {
  const [isAdded, setIdAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ key, imageURL, title, price });
    setIdAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          width={30}
          height={30}
          src={
            (item,
            favoriteItems.indexOf(item) != -1
              ? "/img/liked.svg"
              : "/img/like.svg")
          }
          alt="unliked"
          onClick={onClickFavorite}
        ></img>
      </div>
      <img width={133} height={112} src={imageURL}></img>
      <p>{title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price} руб.</b>
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
