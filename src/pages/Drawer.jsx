import React from "react";
import { Link } from "react-router-dom";

function Drawer({ items = [], onClickPurchases, onRemoveItem }) {
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

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center">
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
              <Link to="/cart/maked">
                <button
                  className="green_button"
                  onClick={() => onClickPurchases(items)}
                >
                  Оформить заказ
                  <img src="/img/arrow.svg" alt="arrow"></img>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column align-center statusCart">
            <img
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="cart"
              className="mb-5"
            ></img>
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
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
            <h3 style={{ color: "#87C20A" }}>Заказ оформлен!</h3>
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
