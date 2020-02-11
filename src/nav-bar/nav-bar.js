import Jobs from '../jobs/jobs';
import React from 'react';
import Technologies from '../technologies/technologies';
import {NavLink, withRouter} from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.technologies = React.createRef()  
    }

    scrollToMyRef = (myRef) => window.scrollTo(0, myRef.current.offsetTop);

    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {

        return (
            <div>
                <nav className="navbar navbar-inverse nav-header" >
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                            <li><NavLink to="/Tecnologias">Info</NavLink></li>
                            <li className={this.getNavLinkClass("/Tecnologias")}><NavLink to="/Tecnologias">Tecnologias</NavLink></li>
                            <li className={this.getNavLinkClass("/Experiencia")}><NavLink to="/Experiencia">Experiencia</NavLink></li>
                            <li className={this.getNavLinkClass("/Educacion")}><NavLink to="/Educacion">Educacion</NavLink></li>
                            <li className={this.getNavLinkClass("/Contacto")}><NavLink to="/Contacto">Contacto</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="body-info">
                    <div ref={this.info}>
                        <p>My goals are improve my technical skills and use my knowledge learned in previous projects in a good working environment and continue growing with professional people.</p><hr/>
                    </div>
                    <div ref={this.technologies}>
                        <Technologies /><hr/>
                    </div>
                    <div ref={this.jobs}>
                        <Jobs /><hr/>
                    </div>
                    <div ref={this.studies}>
                        studies..<hr/>
                        </div>
                    <div ref={this.about}>
                        Contact information
                    </div>
                </div>
            </div>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;