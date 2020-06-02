import React, { Component } from 'react'
import Author from './Author';
import Guide from './Guide';
import Calc from './Calc';
import Header from './Header';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<Author/>
				<Header/>
				<Calc/>
				<Guide/>
			</div>
		)
  }

}
