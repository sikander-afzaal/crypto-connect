import React from "react";
import "./Mint.css";
import bg from "../../Assets/mint.gif";
import Btn from "../../btn";
function Mint() {
  return (
    <div className="mint">
      <img src={bg} alt="" />
      <Btn />
    </div>
  );
}

export default Mint;
