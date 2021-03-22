import React from 'react';

class AppWrap extends React.Component{
    render(){
        return (
            <div className="miw-app-wrap" >
                <div className="miw-app-wrap-top-bar" draggable={true} >
                {this.props.appName}
                </div>
                <div className="miw-app-wrap-content" >
                    {this.props.children}
                </div>
            </div>
        )
    }

    componentDidMount(){

    }
}

export default AppWrap;