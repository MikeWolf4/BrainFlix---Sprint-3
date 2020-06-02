import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() { 
        
        return <div className="header-container">
            <Link className="header__logo-container" to="/main/1af0jruup5gu/">
                <div className="header__logo-container">
                    <img className="header__logo" src={require("../assets/Logo/Logo-brainflix.svg")} alt="BrainFlix Logo"/>
                </div>
            </Link>
            
            <div className="header__search-container">
                <a className="header__search-button" itemID="searchButton" href=""><img src={require("../assets/Icons/SVG/Icon-search.svg")} alt=""/></a>
                <input className="header__search-input" placeholder="Search" type="text"/>
            </div>
            <Link className="header__upload-container" to="/upload/">
                <div className="header__upload-container">
                    <div className="header__upload-button" href=""><img className="header__upload-button-plus" src={require("../assets/Icons/SVG/Icon-upload.svg")} alt=""/>Upload</div>
                    <img className="header__upload-icon" src={require("../assets/Images/Mohan-muruge.jpg")} alt=""/>
                </div>
            </Link>
            
        </div>;
    }
}
 
export default Header;