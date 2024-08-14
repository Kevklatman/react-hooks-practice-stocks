import React from "react";
import stocks from "../db.json";


function Stock() {
  stocks.map((stock)=> 
   
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
