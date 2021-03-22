import React from "react";
import './style.scss';
import { connect } from 'react-redux';

const BottomBar = (props) => {

    let appIcons = [
        {title: 'App Store',src : './img/app-icons/app-store.svg'},
        {title: 'Lauchpad',src : './img/app-icons/launchpad.svg'},
        {title: 'Finder',src : './img/app-icons/finder.svg'},
        {title: 'Key Note',src : './img/app-icons/key-note.svg'},
        {title: 'Maps',src : './img/app-icons/maps.svg'},
        {title: 'Safari',src : './img/app-icons/safari.svg'},
        {title: 'System Preferences',src : './img/app-icons/system-pref.svg'},
        {title: 'Terminal',src : './img/app-icons/terminal.svg'},
        {title: 'Trash',src : './img/app-icons/trash.svg'},
    ];

    appIcons = appIcons.map((item,index)=> (
        <div className="btm-bar-icon-wrapper" key={index} data-title={item.title} ><img className="btm-bar-icon"  src={item.src} /></div>
    ));
console.log( props );
  return (
    <div className="btm-bar">
        {appIcons}
    </div>
  );
};



function mapStateToProps(store, ownProps) {
    return {
      store
    }
  }
  
export default connect(mapStateToProps)(BottomBar);