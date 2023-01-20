function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" className="mr-15"></img>
        <div>
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших крассовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img
            width={20}
            height={20}
            src="/img/cart.svg"
            className="mr-10 cu-p"
            onClick={props.onClickPurchases}
          ></img>

          <span className="cu-p" onClick={props.onClickCart}>
            1205 руб.
          </span>
        </li>
        <li className="mr-15 cu-p">
          <img
            width={20}
            height={20}
            src="/img/heart.svg"
            onClick={props.onClickFavorite}
          ></img>
        </li>
        <li className="mr-30">
          <img width={20} height={20} src="/img/user.svg"></img>
        </li>
      </ul>
    </header>
  );
}

export default Header;
