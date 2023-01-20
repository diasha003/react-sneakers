import Card from "./Card";

function Content({ items, favotireItems, onClickFavorite, onPlus }) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img width={14} height={14} src="/img/search.svg" alt="search"></img>
          <input placeholder="Поиск..."></input>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <Card
            item={item}
            key={item.key}
            title={item.title}
            price={item.price}
            imageURL={item.imageURL}
            onClickFavorite={() => onClickFavorite(item)}
            onPlus={(obj) => onPlus(item)}
            favoriteItems={favotireItems}
          ></Card>
        ))}
      </div>
    </div>
  );
}
export default Content;
