import PropTypes from 'prop-types';
import React from 'react';
//import {NavLink}  from 'react-router-dom';
import Nav from './nav-bar/nav-bar';
import './App.css';

export default class Home extends React.Component {
	static get propTypes() {
        return {
            location: PropTypes.object.isRequired,
        };
	}
	
	getNavLinkClass(path) {
		console.log('location: ', this);
		return this.props.path === path ? 'active' : '';
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="title-header">
						<p className='title-name'>Joaquin Mauricio Ocampo</p>
						<p className='title-job'><em>Fron-End developer</em></p>
					</div>
					<div>
						<Nav />
					</div>
				</header>
			</div>
		);
	}
}
