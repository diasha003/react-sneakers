import styles from "./Card.module.scss";

console.log(styles);

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img width={50} height={50} src="/img/unliked.svg" alt="unliked"></img>
      </div>
      <img width={133} height={112} src={props.imageURL}></img>
      <p>{props.title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price}</b>
        </div>
        <img
          className="button"
          src="/img/btn-plus.svg"
          alt="plus"
          onClick={() => alert(1)}
        ></img>
      </div>
    </div>
  );
}

export default Card;
