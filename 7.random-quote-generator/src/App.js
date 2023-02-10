import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import QuoteContainer from "./components/QuoteContainer";

function App() {
  const [data, setData] = useState();
  const [random, setRandom] = useState();
  const [color, setColor] = useState("tomato");
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.quotes);
      });
  }, []);
  let randomColor = () => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return `rgb(${a},${b},${c})`;
  };
  let handleClick = () => {
    let index = Math.floor(Math.random() * data.length);
    setRandom(index);
    let color = randomColor();
    setColor(color);
  };
  console.log(color);
  return (
    <div className='App'>
      <QuoteContainer
        handleClick={handleClick}
        data={random === undefined ? "" : data[random]}
        color={color}
      />
    </div>
  );
}

export default App;
