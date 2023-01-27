import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card({
  item,
  id,
  imageURL,
  title,
  price,
  onClickFavorite,
  onPlus,
  favorited = false,

  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);

  const [isLike, setIsLike] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imageURL, title, price });
  };

  const onClickLike = () => {
    onClickFavorite();
    setIsLike(!isLike);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={0}
          width={160}
          height={265}
          viewBox="0 0 160 287"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="160" height="90" />
          <rect x="0" y="112" rx="10" ry="10" width="160" height="15" />
          <rect x="0" y="136" rx="10" ry="10" width="100" height="15" />
          <rect x="1" y="186" rx="10" ry="10" width="80" height="25" />
          <rect x="120" y="180" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
              src={
                isItemAdded(imageURL)
                  ? "/img/btn-checked.svg"
                  : "/img/btn-plus.svg"
              }
              alt="plus"
              onClick={onClickPlus}
            ></img>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
