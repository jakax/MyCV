import React from 'react';
import {withRouter} from 'react-router-dom'

import './technologies.css';

class Technologies extends React.Component {

    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            technologies: [
                { id: 0 , name: 'React', percentage: 60, icon: 'react', page:'https://reactjs.org/' },
                { id: 1 , name: '', percentage: 80, icon: 'js-square', page:'https://www.javascript.com/' },
                { id: 2 , name: '', percentage: 90, icon: 'html5', page:'https://html.com/' },
                { id: 3 , name: '', percentage: 90, icon: 'css3-alt', page:'https://css-tricks.com/' },
                { id: 4 , name: '', percentage: 70, icon: 'github', page:'https://github.com/' },
                { id: 5 , name: 'Webpack', percentage: 50, icon: '', page:'https://webpack.js.org/' },
                { id: 6 , name: 'Jest', percentage: 60, icon: '', page:'https://jestjs.io/' },
                { id: 7 , name: '', percentage: 30, icon: 'angular', page:'https://angular.io/' },
                { id: 8 , name: 'JQuery', percentage: 90, icon: '', page:'https://jquery.com/' },
                { id: 9 , name: 'C#', percentage: 40, icon: '', page:'https://docs.microsoft.com/en-us/dotnet/csharp/' },
                { id: 10 , name: '', percentage: 20, icon: 'java', page:'https://www.java.com/es/' },
                { id: 11 , name: 'SQL', percentage: 70, icon: '', page:'https://www.microsoft.com/en-us/sql-server/default.aspx' },
                { id: 12 , name: '', percentage: 70, icon: 'ubuntu', page:'https://ubuntu.com/' },
                { id: 13 , name: 'SCRUM', percentage: 90, icon: '', page:'https://www.scrum.org/' },
            ]
        }
    }

    renderTableData() {
        return this.state.technologies.map(tech => {
           const { id, percentage, page } = tech //destructuring
           let iconSection;
           if (tech.icon) {
                iconSection = <div>
                    <i className={`fab fa-${tech.icon}`}></i><br />
                    <p>{tech.name}</p>
                </div>;
           } else {
                iconSection = <div>
                    <p>{tech.name}</p>
                </div>;
           }
           return (
            <div key={id} className="col-sm-3 col-md-2">
                <a href={page} target="_blank">
                    <div className="progress" data-percentage={percentage}>
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                            {iconSection}
                        </div>
                    </div>
                </a>
            </div>
           )
        })
     }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {this.renderTableData()}  
                </div>
            </div>
        )
    }
};
Technologies = withRouter(Technologies);
export default Technologies;
