import React from 'react';
import logo from '../../img/apple-256x256.png';
import DateAndTime from './tiny-stuff/dateTime';

class MenuBar extends React.Component{


    render(){
        return (
            <div className="menu-bar-wrap" >
                <div className="left-things" >
                    <img className="logo" src={logo} alt="Apple Logo" />
                </div>
                <div className="right-things" >
                    <DateAndTime />
                </div>
            </div>
        );
    }
}

export default MenuBar;