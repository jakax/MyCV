import React from 'react';
import {withRouter} from 'react-router-dom'

//require('bootstrap');

class Studies extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <p><em>Computer Science (2016 - 2019)</em></p>
                    <ul>
                        <li>National University of Quilmes (U.N.Q)</li>
                    </ul>
                </div><br/>
                <div className="row">
                    <p><em>Informatic Engineering (2010 - 2015)</em></p>
                    <ul>
                        <li>Technologic National University (U.T.N)</li>
                    </ul>
                </div><br/>
                <div className="row">
                    <p><em>Avionic Technician (2006 - 2010)</em></p>
                    <ul>
                        <li>E.E.T N 7 I.M.P.A T.R.Q</li>
                    </ul>
                </div>
            </div>
        )
    }
};
Studies = withRouter(Studies);
export default Studies;