import React from "react";
import ReactDOM from "react-dom";
import "../css/style.scss";
import LoadScreen from "./components/load-screen";
import MenuBar from "./components/menu/menu-bar";
import HomeScreen from "./components/home-screen";
import BottomBar from './components/bottom-bar';
import AppWrap from './components/app-wrap';
import configStore from './store/store';
import { Provider } from 'react-redux';
import Terminal from './components/apps/terminal';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ loading: false });
      }.bind(this),
      3000
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? <LoadScreen /> : 
        <div>
        <HomeScreen /> 
        <MenuBar />
        <BottomBar />

        <AppWrap appName="Terminal" >
          <Terminal/>
        </AppWrap>
        </div>
        }
      </div>
    );
  }
}

var lStorage = JSON.parse(localStorage.store);

var store = configStore( lStorage );
ReactDOM.render(
          <Provider store={store} >
            <Main />
          </Provider>
          , document.getElementById("root"));
