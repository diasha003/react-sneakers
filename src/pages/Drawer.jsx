import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Info from "../components/Info";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onRemoveItem }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const { cartItems, onAddPurchasesItems, setCartItems } =
    React.useContext(AppContext);

  const onClickOrder = async () => {
    try {
      //onAddPurchasesItems(cartItems);
      const { data } = await axios.post(
        "https://63ce90b3fdfe2764c725c25b.mockapi.io/purchases",
        {
          items: cartItems,
        }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://63c9a2e0320a0c4c954cae4f.mockapi.io/cart/",
          item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="overlay">
      <div className="drawer-block d-flex flex-column">
        <h2 className="d-flex justify-between">
          Корзина
          <Link to="/">
            <img
              width={30}
              height={30}
              src="/img/btn-remove.svg"
              alt="remove"
              className=" cu-p"
            ></img>
          </Link>
        </h2>

        {cartItems.length > 0 ? (
          <>
            <div className="items">
              {cartItems.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center">
                  <img
                    width={70}
                    height={70}
                    src={obj.imageURL}
                    className="m-20"
                    alt="sneakers"
                  ></img>
                  <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <p>{obj.title}</p>
                      <span>{obj.price} руб.</span>
                    </div>
                    <img
                      width={30}
                      height={30}
                      src="/img/btn-remove.svg"
                      className="mr-20 remove_btn"
                      alt="remove"
                      onClick={() => onRemoveItem(obj.id)}
                    ></img>
                  </div>
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>

              <button className="green_button" onClick={onClickOrder}>
                Оформить заказ
                <img src="/img/arrow.svg" alt="arrow"></img>
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            imageURL={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          ></Info>
        )}
      </div>
    </div>
  );
}

export default Drawer;

{
  /* <div className="d-flex flex-column align-center statusCart ">
            <img
              width={83}
              height={120}
              src="/img/complete-order.jpg"
              alt="cart"
              className="mb-5"
            ></img>
            <h3 style={{ color: "#87C20A" }}>"Корзина пустая"</h3>
            <p>Ваш заказ #18 скоро будет передан курьерской доставке</p>
            <Link to="/">
              <button className="green_button" onClick={onClose}>
                <img
                  src="/img/arrow.svg"
                  alt="arrow"
                  className="arrowBack"
                ></img>
                Вернуться назад
              </button>
            </Link>
          </div>
        */
}
