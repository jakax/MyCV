import React from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'

//require('bootstrap');

class Jobs extends React.Component {

    constructor() {
        super();
        this.state = {
          companyName: ''
        };
        this.activeCompany = this.activeCompany.bind(this);
      }

    activeCompany = e => {
        this.setState({
            companyName: e.target.value
        });
    }

    render() {
        let companyDiv = <div></div>;
        switch (this.state.companyName) {
            case 'price':
            companyDiv = <div>
                <p><em>Price Waterhouse</em></p><br/>
                <p>From July 2013 - July 2014</p><br/>
                <p>System Audit</p>
            </div>;
            break;
            case 'globant':
            companyDiv = <div>
                <p><em>Globant</em></p><br/>
                <p>From July 2014 - August 2015</p>
                <ul>
                    <li>Java web Course (1 mes)</li>
                    <li>
                        Automation Tester in Disney
                        <ul>
                            <li>Technologies: Maven, Java, JBehavez steps, Automation Framework Lite</li>
                            <li>Repository: GIT</li>
                        </ul>
                    </li>
                    <li>
                        Front End Developer in "Hermanos de sangre"
                        <ul>
                            <li>Technologies: HTML, CSS, JavaScript</li>
                            <li>Repository: SVN</li>
                        </ul>
                    </li>
                    <li>
                        Front End Developer in Disney
                        <ul>
                            <li>Technologies: HTML, CSS, PHP, JavaScript</li>
                            <li>Frameworks: AngularJS</li>
                            <li>Repository: GIT</li>
                        </ul>
                    </li>
                </ul>
            </div>;
            break;
            case 'excelan':
            companyDiv = <div>
                <p><em>Excelan Automación</em></p><br/>
                <p>From August 2015 - December 2018 </p>
                <ul>
                    <li>
                        Full Stack Developer SPC project (Check Processing System)
                        <ul>
                            <li>Client: Galicia</li>
                            <li>Technologies: HTML, CSS, JS, JQuery, C#, .NET MVC</li>
                            <li>DataBase in SQL</li>
                            <li>Develop and implementation of web pages</li>
                        </ul>
                    </li>
                    <li>
                        Full Stack Developer in BI (Banco Interfinanzas)
                        <ul>
                            <li>Technologies: C#, .NET MVC, JS, JQuery, CSS, HTML</li>
                            <li>DataBase in SQL</li>
                            <li>Analysis, Design, Develop and Implementation of web page (pledge loans) internal page</li>
                            <li>Analysis, Design, Develop and Implementation of web page (personal loans) internal page</li>
                            <li>Refactoring and Migration of pledge loans application</li>
                            <li>Analysis, Design, Develop and Implementation of application to capture emails automatically (customer claim application)</li>
                        </ul>
                    </li>
                </ul>
            </div>;
            break;
            case 'tekii':
            companyDiv = <div>
                <p><em>Tekii SRL</em></p><br/>
                <p>From December 2018 - September 2019</p>
                <ul>
                    <li>
                        React Developer
                        <ul>
                            <li>Client: Warner Bros.</li>
                            <li>Technologies: Webpack, React 16, Less, Java, PostgreSQL</li>
                            <li>Fix issues and develop new features for <a href="https://www.wbtvd.com" target="_blank" rel="noopener noreferrer">https://www.wbtvd.com</a> and Brainiac (Warner production and configuration pages).</li>
                        </ul>
                    </li>
                </ul>
            </div>;
            break;
            case 'super7':
            companyDiv = <div>
                <p><em>Super7UI</em></p><br/>
                <p>From September 2019 - Now</p>
                <ul>
                    <li>
                        React Developer
                        <ul>
                            <li>Client: Warner Bros.</li>
                            <li>Technologies: Webpack, React 16, Less, Java, PostgreSQL</li>
                            <li>Fix issues and develop new features for <a href="https://www.wbtvd.com" target="_blank" rel="noopener noreferrer">https://www.wbtvd.com</a> and Brainiac (Warner production and configuration pages).</li>
                        </ul>
                    </li>
                </ul>
            </div>;
            break;
            default:
            break;
        }

        return (
            <div>
                <div className="btn-toolbar jobs">
                    <Button value="price" onClick={this.activeCompany}>Price Waterhouse</Button>
                    <Button value="globant" onClick={this.activeCompany}>Globant</Button>
                    <Button value="excelan" onClick={this.activeCompany}>Excelan Automación</Button>
                    <Button value="tekii" onClick={this.activeCompany}>Tekii SRL</Button>
                    <Button value="super7" onClick={this.activeCompany}>Super7UI</Button>
                </div>

                <div>{companyDiv}</div>
            </div>
        )
    }
};
Jobs = withRouter(Jobs);
export default Jobs;