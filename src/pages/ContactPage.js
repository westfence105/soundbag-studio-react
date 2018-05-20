import React, { Component } from 'react';

import "../App.css";
import "./ContactPage.css";

class ContactPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            mail: "",
            message: "",
        };
    }

    render() {
        return (
            <div className="contact-page">
                <h1 className="page-title">CONTACT</h1>
                <hr className="star" />
                <div className="page-content">
                    <form onSubmit={ e => this.handleSubmit( e ) } className="contact-form">
                        <div className="table">
                            <div className="tr"><div className="th"><label htmlFor="name">名前</label></div>
                                                <div className="td"><input type="text" id="name" /></div></div>
                            <div className="tr"><div className="th"><label htmlFor="mail">E-Mail</label></div>
                                                <div className="td"><input type="text" id="mail"/></div></div>
                            <div className="tr"><div className="th"><label htmlFor="message">メッセージ</label></div>
                                                <div className="td"><textarea id="message"/></div></div>
                        </div>
                        <div className="container-submit"><input type="submit" value="送信" className="contact-form-submit"/></div>
                    </form>
                </div>
            </div>
        );
    }

    handleSubmit( e ){
        e.preventDefault();
        console.log(e);
    }
}

export default ContactPage;
