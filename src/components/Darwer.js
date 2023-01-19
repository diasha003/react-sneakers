function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer-block d-flex flex-column">
        <h2 className="d-flex justify-between">
          Корзина
          <img
            width={30}
            height={30}
            src="/img/btn-remove.svg"
            alt="remove"
            className=" cu-p"
          ></img>
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              className="m-20"
              alt="sneakers"
            ></img>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <span>12 999 руб.</span>
              </div>
              <img
                width={30}
                height={30}
                src="/img/btn-remove.svg"
                className="mr-20 remove_btn"
                alt="remove"
              ></img>
            </div>
          </div>
          <div className="cartItem d-flex align-center">
            <img
              width={70}
              height={70}
              src="/img/sneakers/2.jpg"
              className="m-20"
              alt="sneakers"
            ></img>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <span>12 999 руб.</span>
              </div>
              <img
                width={30}
                height={30}
                src="/img/btn-remove.svg"
                className="mr-20 remove_btn"
                alt="remove"
              ></img>
            </div>
          </div>
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
          <button className="green_button">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
