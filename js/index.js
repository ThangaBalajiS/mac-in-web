import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div style={{background:'red'}} >Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));