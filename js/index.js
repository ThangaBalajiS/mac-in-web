import React from "react";
import ReactDOM from "react-dom";
import '../css/style.scss';
import MenuBar from './components/menu-bar';
import HomeScreen from './components/home-screen';

const Index = () => {
  return <div>
            <HomeScreen/>
            <MenuBar/>
         </div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));