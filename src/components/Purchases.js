import Card from "./Card";

function Purchases({
  purchasesItems,
  setPurchasesOpened,
  setCartOpened,
  onAddFavoriteItems,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex mb-40">
        <button
          className="btnArrow mr-10"
          onClick={() => (setPurchasesOpened(false), setCartOpened(false))}
        ></button>
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
            <button
              className="green_button"
              onClick={() => setPurchasesOpened(false)}
            >
              <img src="/img/arrow.svg" alt="arrow" className="arrowBack"></img>
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Purchases;
