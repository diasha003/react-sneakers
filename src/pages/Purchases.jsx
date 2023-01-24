import { Link } from "react-router-dom";
import Card from "../components/Card";

function Purchases({ purchasesItems, onAddFavoriteItems }) {
  return (
    <div className="content p-40">
      <div className="d-flex mb-40">
        <Link to="/">
          <button className="btnArrow mr-10"></button>
        </Link>
        <h1>Мои покупки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {purchasesItems.length ? (
          purchasesItems.map((item) => (
            <Card
              key={item.key}
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
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
            <h3>У вас нет заказов</h3>
            <p>Вы обязательно найдёте то, что вам понравится</p>
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

export default Purchases;
