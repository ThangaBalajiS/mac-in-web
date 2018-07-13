import React from 'react';
import logo from '../../img/apple-256x256.png';

class MenuBar extends React.Component{


    render(){
        return (
            <div className="menu-bar-wrap" >
                <img className="logo" src={logo} alt="Apple Logo" />
            </div>
        );
    }
}

export default MenuBar;