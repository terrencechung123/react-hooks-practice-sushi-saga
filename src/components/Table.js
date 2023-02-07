import React, { useState, useEffect } from "react";

function Table({ platesOnTable, moneyRemaining }) {
  const [emptyPlates, setEmptyPlates] = useState([]);
  

  

  useEffect(() => {
    const plates = [];

    for (let i = 0; i < platesOnTable; i++) {
      // add plate to stack of empty plates
      plates.push(<div key={i} className="empty-plate" style={{ top: -7 * i }} />);
    }

    setEmptyPlates(plates);
  }, [platesOnTable]);

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
