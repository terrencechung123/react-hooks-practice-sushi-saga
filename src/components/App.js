import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const sushiUrl = "http://localhost:3001/sushis";

function App() {
  const [platesOnTable, setPlatesOnTable] = useState(0);
  const [moneyRemaining, setMoneyRemaining] = useState(100);

  return (
    <div className="app">
      <SushiContainer
      api={sushiUrl}
      platesOnTable={platesOnTable}
      setPlatesOnTable={setPlatesOnTable}
      moneyRemaining={moneyRemaining}
      setMoneyRemaining={setMoneyRemaining}
      />
      <Table platesOnTable={platesOnTable} moneyRemaining={moneyRemaining} />
    </div>
  );
}


export default App;
