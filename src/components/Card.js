function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img width={50} height={50} src="/img/unliked.svg" alt="unliked"></img>
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg"></img>
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>12 990 руб.</b>
        </div>
        <button>
          <img className="button" src="/img/btn-plus.svg" alt="plus"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
