import React from "react";
import ReactDOM from "react-dom";
import '../css/style.scss';
import MenuBar from './components/menu-bar';

const Index = () => {
  return <div><MenuBar/></div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));