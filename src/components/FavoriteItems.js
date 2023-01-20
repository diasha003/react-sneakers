import Card from "./Card";

function FavoriteItems({ items = [], onNotAddFavoriteItems }) {
  return (
    <div className="content p-40">
      <div className="d-flex mb-40">
        <button className="btnArrow mr-10"></button>
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.length ? (
          items.map((item) => (
            <Card
              key={item.key}
              item={item}
              favoriteItems={items}
              title={item.title}
              price={item.price}
              imageLike={true}
              imageURL={item.imageURL}
              onClickFavorite={() => console.log("Добавили в закладки")}
              //onPlus={(obj) => onAddToCart(item)}
            ></Card>
          ))
        ) : (
          <div
            className="statusCart d-flex flex-column align-center justify-center"
            style={{ height: "700px" }}
          >
            <img></img>
            <h3>Закладок нет :(</h3>
            <p>Вы ничего не добавляли в закладки</p>
            <button className="green_button" onClick={onNotAddFavoriteItems}>
              <img src="/img/arrow.svg" alt="arrow" className="arrowBack"></img>
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteItems;
