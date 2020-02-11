import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

export default class Home extends React.Component {
	static get propTypes() {
        return {
            location: PropTypes.object.isRequired,
        };
	}

	render() {
		return (
			<div>
				<header className="App-header">
					<div className="info-header">
						<p className='title-name'>Info</p>
					</div>
				</header>
			</div>
		);
	}
}
