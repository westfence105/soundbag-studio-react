import React, { Component } from 'react';

import "../App.css";
import "./MainTitlePage.css";

class MainTitlePage extends Component {
    render(){
        return (
            <div className="main-title-page">
                <h1 className="main-title">soundbag studio</h1>
                <hr className="star" />
                <div className="caption">Software Engineer & Sound Producer</div>
            </div>
        );
    }
}

export default MainTitlePage;
