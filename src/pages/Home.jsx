import Card from "../components/Card";

function Home({
  items,
  cartItems,
  favoriteItems,
  onClickFavorite,
  onPlus,
  onSearch,
  valueInputSearch,
}) {
  //console.log({ items });
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img width={14} height={14} src="/img/search.svg" alt="search"></img>
          <input
            placeholder="Поиск..."
            onChange={onSearch}
            value={valueInputSearch}
          ></input>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(valueInputSearch.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.imageURL}
              item={item}
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
              onClickFavorite={() => onClickFavorite(item)}
              onPlus={() => onPlus(item)}
              favoriteItems={favoriteItems}
              added={cartItems.some((obj) => obj.imageURL === item.imageURL)}
            ></Card>
          ))}
      </div>
    </div>
  );
}
export default Home;
