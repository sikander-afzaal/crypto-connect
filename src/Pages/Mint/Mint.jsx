import React from "react";
import "./Mint.css";
// import bg from "../../Assets/mint.gif";
import { Link } from "react-router-dom";
import Btn from "../../btn";
function Mint() {
  return (
    <div className="mint">
      {/* <img src={bg} alt="" /> */}
      <Link to={"/main"}>
        <Btn />
      </Link>
    </div>
  );
}

export default Mint;
