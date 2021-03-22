import React from 'react';
import logo from '../../img/apple-256x256.png';
import './load-screen.scss';

const LoadScreen = () => {

    return (
        <div className="miw-loadscreen-wrap" >
            <div className="miw-loadscreeen-content" >
                <div className="miw-loadscreen-logo" >
                    <img src={logo} />
                </div>
                <div className="miw-loadscreen-bar" >
                    <div className="miw-loadscreen-inner" >
                        
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoadScreen;