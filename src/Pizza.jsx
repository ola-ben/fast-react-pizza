import { useState } from "react";

function Pizza({ name, price, ingridients, photoName, soldOut }) {
  const [quatity, setQuatity] = useState(1);

  function handleAdd() {
    setQuatity((prevQty) => (prevQty === 10 ? prevQty : prevQty + 1));
  }

  function handleSub() {
    setQuatity((prevQty) => (prevQty === 0 ? prevQty : prevQty - 1));
  }

  // console.log("propsreceived");
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
        <span>quatity: {quatity}</span>
        <button onClick={handleSub}>minus</button>
        <button onClick={handleAdd}>add</button>
        <button onClick={() => add(2, 4)}>add</button>
      </div>
    </li>
  );
}

export default Pizza;

function add(a, b) {
  a + b;
}

add(2, 5);
