import axios, { all } from "axios";
import Header from "./components/Header";
import Drawer from "./pages/Drawer";
import React from "react";
import Purchases from "./pages/Purchases";
import FavoriteItems from "./pages/FavoriteItems";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [purchasesItems, setPurchasesItems] = React.useState([]);
  const [favotireItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all(
        [
          axios.get(" https://63c9a2e0320a0c4c954cae4f.mockapi.io/cart"),
          axios.get("https://63ce90b3fdfe2764c725c25b.mockapi.io/favorites"),
          axios.get(" https://63c9a2e0320a0c4c954cae4f.mockapi.io/items"),
        ]
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavoriteItems(favoriteResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    /*let index = cartItems.indexOf(obj);
    if (index !== -1) {
      let removed = cartItems.splice(index, 1);
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, obj]);
    }*/

    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://63c9a2e0320a0c4c954cae4f.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://63c9a2e0320a0c4c954cae4f.mockapi.io/cart",
          obj
        );
        setCartItems([...cartItems, obj]);
      }
    } catch (error) {
      alert();
      console.log(error);
    }
  };

  const onRemoveToCartitem = (id) => {
    axios.delete(`https://63c9a2e0320a0c4c954cae4f.mockapi.io/cart/${id}`);
    setCartItems((prev) =>
      prev.filter((data) => Number(data.id) !== Number(id))
    );
  };

  const onAddFavoriteItems = async (obj) => {
    try {
      const findItem = favotireItems.find(
        (item) => Number(item.id) === Number(obj.id)
      );

      if (findItem) {
        setFavoriteItems((prev) =>
          prev.filter((data) => Number(data.id) !== Number(obj.id))
        );
        axios.delete(
          `https://63ce90b3fdfe2764c725c25b.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://63ce90b3fdfe2764c725c25b.mockapi.io/favorites",
          obj
        );
        setFavoriteItems([...favotireItems, data]);
      }
    } catch (err) {
      alert("Не удалось добавить в избранное!");
      console.log(err);
    }
  };

  const onAddPurchasesItems = (obj) => {
    setPurchasesItems([...purchasesItems, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (imageURL) => {
    //console.log(cartItems);
    return cartItems.some((obj) => obj.imageURL === imageURL);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        purchasesItems,
        favotireItems,
        isItemAdded,
        onAddFavoriteItems,
        setCartItems,
        onAddPurchasesItems,
      }}
    >
      <div className="wrapper clear">
        <Header></Header>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                favoriteItems={favotireItems}
                onClickFavorite={(item) => onAddFavoriteItems(item)}
                onPlus={(item) => onAddToCart(item)}
                onSearch={(event) => onChangeSearchInput(event)}
                valueInputSearch={searchValue}
                isLoading={isLoading}
              ></Home>
            }
          />
          <Route
            path="/favorites"
            exact
            element={<FavoriteItems></FavoriteItems>}
          ></Route>
          <Route
            path="/purchases"
            exact
            element={
              <Purchases
                purchasesItems={purchasesItems}
                onAddFavoriteItems={() => onAddFavoriteItems()}
              ></Purchases>
            }
          ></Route>
          <Route
            path="/cart"
            exact
            element={
              <Drawer onRemoveItem={(id) => onRemoveToCartitem(id)}></Drawer>
            }
          ></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
