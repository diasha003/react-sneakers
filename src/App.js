import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Darwer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 11299,
    imageURL: "/img/sneakers/5.jpg",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10799,
    imageURL: "/img/sneakers/8.jpg",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16499,
    imageURL: "/img/sneakers/10.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer></Drawer>

      <Header></Header>
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
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageURL={obj.imageURL}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
