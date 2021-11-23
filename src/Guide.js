/*

cd desktop/coding/react/cfzerowinrate

git add .

git commit

git push origin master

*/

import React, { Component } from 'react'
import './App.css';

class Guide extends Component {
  constructor(props) {
    super(props);
  }
	
	render() {
		return(		
		<div style={{float: "right", width: "45%", marginRight: "2%", marginTop: "1%"}}>
			To access these statistics, follow these instructions.<br/><br/>
			On the <b>home page</b>, press <b>Menu</b>, then <b>Profile</b>.<br/><br/>
			From here, press the clan you would like to see, then it will tell you your <b>clan level, experience, and wins.</b><br/><br/>
			Use these three numbers to put into the calculator, and you will get your win rate!<br/><br/>
			Keep in mind, these will count your matches when you are facing a VP Farmer, and when you are VP Farming, as well.<br/><br/>
			PS. With the inclusion of tournaments, <b>this calculator will be inaccurate if you've ever used the deck in a tournament</b>.<br/><br/>
			This is because the game will not count wins for you in tournaments, while still getting experience. So, if you have ever won with that clan in the tournament mode, the calculation will be skewed into showing that you lost more than you did.<br/><br/>
			If you do remember how many times you've won with that clan during tournaments, you should include it as well for accuracy.<br/><br/>
		</div>
		);
  }

}

export default Guide;
