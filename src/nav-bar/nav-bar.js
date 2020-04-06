import Contact from '../contact/contact';
import Jobs from '../jobs/jobs';
import React from 'react';
import Studies from '../studies/studies';
import Technologies from '../technologies/technologies';
import {withRouter} from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.contactRef = React.createRef();
        this.educationRef = React.createRef();
        this.infoRef = React.createRef();
        this.jobsRef = React.createRef();
        this.technologiesRef = React.createRef();
    }

    handleScrollToStats = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop
        })
  }

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
                            <li><a type="button" onClick={this.handleScrollToStats.bind(this, this.infoRef)}>Info</a></li>
                            <li><a onClick={this.handleScrollToStats.bind(this, this.technologiesRef)}>Skills</a></li>
                            <li><a onClick={this.handleScrollToStats.bind(this, this.jobsRef)}>Experience</a></li>
                            <li><a onClick={this.handleScrollToStats.bind(this, this.educationRef)}>Education</a></li>
                            <li><a onClick={this.handleScrollToStats.bind(this, this.contactRef)}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="body-info">
                    <div ref={this.infoRef}>
                        <p>My goals are improve my technical skills and use my knowledge learned in previous projects in a good working environment and continue growing with professional people.</p><hr/>
                    </div>
                    <div ref={this.technologiesRef}>
                        <Technologies /><hr/>
                    </div>
                    <div ref={this.jobsRef}>
                        <Jobs /><hr/>
                    </div>
                    <div ref={this.educationRef}>
                        <Studies /><hr/>
                        </div>
                    <div ref={this.contactRef}>
                        <Contact /><hr/>
                    </div>
                </div>
            </div>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;