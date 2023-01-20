import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import Purchases from "./components/Purchases";
import FavoriteItems from "./components/FavoriteItems";
import Content from "./components/Content";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  const [purchasesOpened, setPurchasesOpened] = React.useState(false);
  const [purchasesItems, setPurchasesItems] = React.useState([]);

  const [favoriteItemsOpened, setFavoriteItemsOpened] = React.useState(false);
  const [favotireItems, setFavoriteItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://63c9a2e0320a0c4c954cae4f.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []); //данные никакие не изменились ([]) - при первом рендеринге

  const onAddToCart = (obj) => {
    var index = cartItems.indexOf(obj);
    if (index !== -1) {
      let removed = cartItems.splice(index, 1);
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, obj]);
    }
  };

  const onAddFavoriteItems = (obj) => {
    setFavoriteItems([...favotireItems, obj]);
  };

  return (
    <div className="wrapper clear">
      {!purchasesOpened && cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onClickPurchases={(items) => (
            setPurchasesOpened(true), setPurchasesItems(items, setCartItems([]))
          )}
        ></Drawer>
      )}
      <Header
        onClickCart={() => setCartOpened(true)}
        onClickPurchases={() => setPurchasesOpened(true)}
        onClickFavorite={() => setFavoriteItemsOpened(true)}
      ></Header>

      {favoriteItemsOpened && (
        <FavoriteItems
          onNotAddFavoriteItems={() => setFavoriteItemsOpened(false)}
          items={favotireItems}
        ></FavoriteItems>
      )}

      {purchasesOpened && (
        <Purchases
          purchasesItems={purchasesItems}
          setPurchasesOpened={() => setPurchasesOpened(false)}
          setCartOpened={() => setCartOpened(false)}
          onAddFavoriteItems={() => onAddFavoriteItems()}
        ></Purchases>
      )}

      {!favoriteItemsOpened && !purchasesOpened && (
        <Content
          items={items}
          favoriteItems={favotireItems}
          onClickFavorite={(item) => onAddFavoriteItems(item)}
          onPlus={(item) => onAddToCart(item)}
        ></Content>
      )}
    </div>
  );
}

export default App;
