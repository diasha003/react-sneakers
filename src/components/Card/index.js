import React from "react";
import styles from "./Card.module.scss";

function Card({
  item,
  id,
  favoriteItems = [],
  imageURL,
  title,
  price,
  onClickFavorite,
  onPlus,
  favorited = false,
  added = false,
}) {
  const [isAdded, setIdAdded] = React.useState(added);
  const [isLike, setIsLike] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imageURL, title, price });
    setIdAdded(!isAdded);
  };

  const onClickLike = () => {
    onClickFavorite();
    setIsLike(!isLike);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          width={30}
          height={30}
          src={isLike ? "/img/liked.svg" : "/img/like.svg"}
          alt="unliked"
          onClick={onClickLike}
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
