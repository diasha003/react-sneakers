import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import AppContext from "../context";

function FavoriteItems({ onClickFavorite }) {
  const { favotireItems, onAddFavoriteItems } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex mb-40">
        <Link to="/">
          <button className="btnArrow mr-10"></button>
        </Link>

        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favotireItems.length ? (
          favotireItems.map((item) => (
            <Card
              {...item}
              key={item.key}
              item={item}
              imageLike={true}
              favorited={true}
              onClickFavorite={() => onAddFavoriteItems(item)}
              //onPlus={(obj) => onAddToCart(item)}
            ></Card>
          ))
        ) : (
          <div
            className="statusCart d-flex flex-column align-center justify-center"
            style={{ height: "700px" }}
          >
            <img></img>
            <h3>Закладок нет :</h3>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/">
              <button className="green_button">
                <img
                  src="/img/arrow.svg"
                  alt="arrow"
                  className="arrowBack"
                ></img>
                Вернуться назад
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteItems;
