import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Darwer";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}></Drawer>}

      <Header onClickCart={() => setCartOpened(true)}></Header>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img
              width={14}
              height={14}
              src="/img/search.svg"
              alt="search"
            ></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageURL={obj.imageURL}
              onClickFavorite={() => console.log("Добавили в закладки")}
              onClickPlus={() => console.log("Добавили в корзину")}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
