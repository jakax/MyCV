import React from 'react';
import {withRouter} from 'react-router-dom'

//require('bootstrap');

class Contact extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <p><em>Address: </em>22, Panorama Terrace, Queenstown, 9300, New Zealand</p>
                </div><br/>
                <div className="row">
                    <p><em>Nationality: </em>Argentina</p>
                </div><br/>
                <div className="row">
                    <p><em>Mobile: </em>+54 11 67948454</p>
                </div><br/>
                <div className="row">
                    <p><em>DNI: </em>35.372.219</p>
                </div><br/>
                <div className="row">
                    <p><em>Born: </em>November 2nd 1990</p>
                </div><br/>
                <div className="row">
                    <p><em>Email: </em>joaquinocampo18@gmail.com</p>
                </div><br/>
                <div className="row">
                    <p><em>Github: </em><a href="https://github.com/jakax" target="_blank">https://github.com/jakax</a></p>
                </div><br/>
                <div className="row">
                    <p><em>Linkedin: </em><a href="https://www.linkedin.com/in/joaquin-ocampo/" target="_blank">https://www.linkedin.com/in/joaquin-ocampo/</a></p>
                </div><br/>
            </div>
        )
    }
};
Contact = withRouter(Contact);
export default Contact;