function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <h1 className="">fast react pizza co</h1>
    </header>
  );
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. {pizzaData.length} creative dishes to choose
        from. All from our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} /> //passing props
        ))}
      </ul>
    </section>
  );
}

function Pizza(props) {
  //receiving props
  console.log(props, "propsreceived");
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name} </h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>6</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;

  const isOpen = hour >= openingHour && hour <= closingHour;

  console.log(hour);

  return (
    <footer className="footer">
      {isOpen && (
        <p>
          we're open from {openingHour}:00 to {closingHour}:00. come visit us or
          orderr online
        </p>
      )}

      {!isOpen && (
        <p>
          we are closed for the day! we open {openingHour}:00 come again
          tommorow
        </p>
      )}
      <button className="btn">order</button>
    </footer>
  );
}
