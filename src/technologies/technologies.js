import React from 'react';
import {withRouter} from 'react-router-dom'

import './technologies.css';

class Technologies extends React.Component {

    constructor() {
        super();
        this.state = {
          companyName: ''
        };
        this.activeCompany = this.activeCompany.bind(this);
      }

    activeCompany = e => {
        console.log(e.target.value);
        this.setState({
            companyName: e.target.value
        });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-md-2">
                        <div className="progress" data-percentage="60">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                <div>
                                    <i className="fab fa-react"></i><br />
                                    <p>React</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-2">
                        <div className="progress" data-percentage="80">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                <i className="fab fa-js-square"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-3 col-md-2">
                        <div className="progress" data-percentage="90">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                <div>
                                    <i className="fab fa-html5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-sm-3 col-md-2">
                        <div className="progress" data-percentage="90">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                <div>
                                    <i className="fab fa-css3-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                        <div className="col-sm-3 col-md-2">
                        <div className="progress" data-percentage="70">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                <div>
                                    <i className="fab fa-github"></i>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-sm-3 col-md-2">
                            <div className="progress" data-percentage="50">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        <p>Webpack</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <div className="progress" data-percentage="60">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <p>Jest</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-3 col-md-2">
                            <div className="progress" data-percentage="30">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        <i className="fab fa-angular"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-sm-3 col-md-2">
                            <div className="progress" data-percentage="90">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        <p>JQuery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-2">
                        <div className="progress" data-percentage="40">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                <div>
                                    <p>C#</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-sm-3 col-md-2">
                            <div className="progress" data-percentage="20">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        <i className="fab fa-java"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <div className="progress" data-percentage="70">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <p>SQL</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-3 col-md-2">
                            <div className="progress" data-percentage="70">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        <i className="fab fa-ubuntu"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-sm-3 col-md-2">
                            <div className="progress" data-percentage="100">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        <p>SCRUM</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                </div>
            </div>
        )
    }
};
Technologies = withRouter(Technologies);
export default Technologies;
