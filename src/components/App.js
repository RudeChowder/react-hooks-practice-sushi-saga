import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eatenSushis, setEatenSushis] = useState([])
  const [money, setMoney] = useState(40)

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => setSushis(data))
  }, [])

  const handleEatSushi = (id, price) => {
    if (money >= price) {
      setEatenSushis([...eatenSushis, id])
      setMoney(money => money - price)
    } else {
      alert("You can't afford that sushi!")
    }
  }

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis}
        eatenSushis={eatenSushis}
        onEatSushi={handleEatSushi}
      />
      <Table 
        plates={eatenSushis}
        money={money}
      />
    </div>
  );
}

export default App;
