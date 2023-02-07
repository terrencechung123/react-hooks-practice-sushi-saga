import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({ api, platesOnTable, setPlatesOnTable, moneyRemaining, setMoneyRemaining }) {
  const [allSushi, setAllSushi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    fetch(api)
    .then((res) => res.json())
    .then((resData) => {
      const newData = resData.map((object)=>{
        object.eaten = false; 
        return object;
      });




      setAllSushi(newData);
    });
  }, [api]);
  
  return (
    <div className="belt">
      <Sushi
      pageNumber={currentPage}
      sushiArr={allSushi}
      platesOnTable={platesOnTable}
      setPlatesOnTable={setPlatesOnTable}
      moneyRemaining={moneyRemaining}
      setMoneyRemaining={setMoneyRemaining}
      />
      <MoreButton onClick={() => setCurrentPage(currentPage + 1)} />
    </div>
  );
}

export default SushiContainer;
