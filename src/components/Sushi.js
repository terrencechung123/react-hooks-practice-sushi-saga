import React, { useState, useEffect } from "react";

function Sushi({ pageNumber, sushiArr, platesOnTable, setPlatesOnTable, moneyRemaining, setMoneyRemaining }) {
  const [currentSushi, setCurrentSushi] = useState([]);

  const removeElement = (e) => {
    const currentSushiPrice = e.target.getAttribute('price');

    if (currentSushiPrice > moneyRemaining) {
      // cannot eat
      return;
    } else {
      // can eat
      setMoneyRemaining(moneyRemaining - currentSushiPrice);
      setPlatesOnTable(platesOnTable + 1);

      const sushiIdx = Number(e.target.getAttribute('arrayIdx'));
      
      const newSushi = currentSushi.map((sushiObj, idx) => {
        if (idx === sushiIdx) {
          sushiObj.eaten = true;
        }

        return sushiObj;
      });

      setCurrentSushi(newSushi);
    }
  };

  useEffect(() => {
    // this is a hook that will run on render
    // it will get the current four sushi based on current page number
    // and set the state

    // on page 1 display sushi index start = 0, end = 3
    // on page 2 display sushi index start = 4, end = 7
    // on page 3 display sushi index start = 8, end = 11
    // etc.
    // start = (page number - 1) * 4
    // end = start + 3
    const startSushiIdx = (pageNumber - 1) * 4;
    const endSushiIdx = startSushiIdx + 3;

    const currentFourSushi = sushiArr.slice(startSushiIdx, endSushiIdx + 1);
    setCurrentSushi(currentFourSushi);

  }, [pageNumber, sushiArr]);

  const renderSingleSushi = (imgUrl, name, price, eaten, index) => {
    return (
      <div className="sushi">
        <div className="plate" onClick={null}>
          {eaten ?
            <div>
              <p style={{ color: 'red' }}>I've been eaten!</p>
            </div>
            : (
            <div  onClick={removeElement}>
            <img
              src={imgUrl}
              alt={name}
              price={price}
              arrayIdx={index}
              width="100%"
            />
            </div>
          )}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    );
  };

  
  return currentSushi.map((sushiObj, idx) => {
    return renderSingleSushi(sushiObj.img_url, sushiObj.name, sushiObj.price, sushiObj.eaten, idx);
    
  });
  
}

export default Sushi;
