import React from "react";
import Card from "../components/Card";

function Home({
  items,
  cartItems,
  favoriteItems,
  onClickFavorite,
  onPlus,
  onSearch,
  valueInputSearch,
  isLoading,
}) {
  const renderItems = () => {
    return (
      isLoading
        ? [...Array(8)]
        : items.filter((item) =>
            item.title.toLowerCase().includes(valueInputSearch.toLowerCase())
          )
    ).map((item, index) => (
      <Card
        key={index}
        item={item}
        {...item}
        onClickFavorite={() => onClickFavorite(item)}
        onPlus={() => onPlus(item)}
        favoriteItems={favoriteItems}
        loading={isLoading}
      ></Card>
    ));
  };

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

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
export default Home;
