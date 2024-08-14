import React from "react";
import Stock from "./Stock";

function StockContainer(){
  return (
  
    <div>
      <h2>Stocks</h2>
      <li>
      <Stock/>
      </li>
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
