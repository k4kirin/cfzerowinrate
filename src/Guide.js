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
		<div style={{float: "right", width: "30%", marginRight: "5%", marginTop: "1%"}}>
			To access these statistics, follow these instructions.<br/><br/>
			On the <b>home page</b>, press <b>Menu</b>, then <b>Profile</b>.<br/><br/>
			From here, press the clan you would like to see, then it will tell you your <b>clan level, experience, and wins.</b><br/><br/>
			Use these three numbers to put into the calculator, and you will get your win rate!
		</div>
		);
  }

}

export default Guide;
