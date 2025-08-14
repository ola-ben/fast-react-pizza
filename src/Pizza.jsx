function Pizza(props) {
  //receiving props

  console.log(props, "propsreceived");
  if (props.pizzaObj.name === "Focaccia") {
    return;
  }
  if (props.pizzaObj.price > 15) {
    return;
  } //last expression before the main return statement

  //receiving props
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name} </h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
