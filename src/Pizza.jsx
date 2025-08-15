function Pizza({ name, price, ingridients, photoName, soldOut }) {
  //receiving props

  console.log("propsreceived");
  if (name === "Focaccia") {
    return;
  }
  if (price > 15) {
    return;
  } //last expression before the main return statement

  //receiving props
  return (
    <li className={`pizza ${soldOut ? "sold-out" : " "}`}>
      {/*conditional class*/}

      <img src={photoName} alt={name} />
      <div>
        <h3>{name} </h3>
        <p>{ingridients}</p>
        {/*conditional text*/}
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;
