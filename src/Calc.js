/*

cd desktop/coding/react/cfzerowinrate

npm start

git add .

git commit

git push origin master

*/

import React, { Component } from 'react'
import './App.css';

const MAX_LEVEL = 50;
const CLANS = ["",
	"Royal Paladin","Oracle Think Tank","Shadow Paladin","Gold Paladin","Angel Feather","Genesis",
	"Kagero","Narukami","Tachikaze","Murakumo","Nubatama",
	"Nova Grappler","Dimension Police","Link Joker",
	"Granblue","Bermuda Triangle","Aqua Force",
	"Dark Irregulars","Pale Moon","Spike Brothers","Gear Chronicle",
	"Neo Nectar","Great Nature","Megacolony"];

class Guide extends Component {
  constructor(props) {
    super(props);
	var level = 0;
	var curExp = 0;
	var wins = 0;
	var totalExp = 0;
	var losses = 0;
	var expType = 0;
	this.state = {
		level: 0,
		curExp: 0,
		wins: 0,
		expType: 0,
		totalExp: 0,
		losses: 0,
		clan: "",
		nation: "white",
		errorLv: false,
		errorXp: false,
		errorWin: false,
	}
  }
	handleChange(type,value){
		this.setState({
			errorLv: false,
			errorXp: false,
			errorWin: false,
		});
		this.updateLv(type=="lv"?value:this.state.level);
		this.updateXp(type=="xp"?value:this.state.curExp);
		this.updateWin(type=="win"?value:this.state.wins);
		this.setState ({
			level: this.level,
			curExp: this.curExp,
			wins: this.wins,
			expType: this.expType,
			totalExp: this.totalExp,
			losses: this.losses,
		});
	}
	handleLvChange(event){
		this.handleChange("lv",event.target.value);
	}
	handleXpChange(event){
		this.handleChange("xp",event.target.value);
	}
	handleWinChange(event){
		this.handleChange("win",event.target.value);
	}
	handleClanChange(event){
		var i;
		var clan=event.target.value;
		var nation;
		for(i=0;i<CLANS.length;i++)
			if(clan==CLANS[i])
				break;
		if(i==0)nation="white";
		else if(i<=6)nation="yellow";
		else if(i<=11)nation="red";
		else if(i<=14)nation="grey";
		else if(i<=17)nation="blue";
		else if(i<=21)nation="purple";
		else nation="green";
		this.setState({
			clan: clan,
			nation: nation,
		});
	}
	updateLv(level){
		if(isNaN(level) || level<0 || level>50){
			this.setState({
				errorLv: true,
			});
			return;
		}
		level=parseInt(level);
		var expType = 0;
		if(level<5) expType = 1;
		else if (level < 10) expType = 2;
		else if (level < 15) expType = 3;
		else if (level < 20) expType = 4;
		else if (level < 50) expType = 5;
		this.level = level;
		this.expType = expType;
	}
	updateXp(curExp){
		if(isNaN(curExp) || curExp<0 || curExp>this.expType*100){
			this.setState({
				errorXp: true,
			});
			return;
		}
		curExp=parseInt(curExp);
		var totalExp = 0;
		for(var i=1;i<=this.level;i++){
			if(i<=5) totalExp += 100;
			else if (i <= 10) totalExp += 200;
			else if (i <= 15) totalExp += 300;
			else if (i <= 20) totalExp += 400;
			else totalExp += 500;
		}
		totalExp+=curExp;
		this.totalExp=totalExp;
		this.curExp=curExp;
	}
	updateWin(wins){
		if(isNaN(wins) || wins<0 || wins>this.totalExp/20){
			this.setState({
				errorWin: true,
			});
			return;
		}
		wins=parseInt(wins);
		var lossExp = this.totalExp - wins*20;
		var losses = lossExp/10;
		this.wins = wins;
		this.losses = losses;
	}
	
	render() {
		return(
			<div style={{float: "left", width: "45%", marginLeft: "2%", marginTop: "1%"}}>
				<label for="level">Clan level (0-{MAX_LEVEL}): </label>
				<input style={{color: this.state.errorLv?"red":"black"}} type="text" id="level" onChange={this.handleLvChange.bind(this)}></input><br/>
				<label for="curExp">Current experience (0-{this.state.expType*100}): </label>
				<input style={{color: this.state.errorXp?"red":"black"}} type="text" id="curExp" onChange={this.handleXpChange.bind(this)}></input><br/>
				<label for="wins">Wins (0-{Math.floor(this.state.totalExp/20)}): </label>
				<input style={{color: this.state.errorWin?"red":"black"}} type="text" id="wins" onChange={this.handleWinChange.bind(this)}></input><br/>
				<label for="clan">Clan (optional): </label>
				<select id="clan" onChange={this.handleClanChange.bind(this)}>
					{CLANS.map(CLANS =>
						<option value={CLANS}>{CLANS}</option>
					)}
				</select><br/>
				<h2 style={{color: this.state.nation}}>
					{this.state.clan}<br/>
					Wins : Losses<br/>
					{this.state.wins} : {this.state.losses}<br/>
					Win Rate: {this.state.wins==0?0:(this.state.wins*100/(this.state.wins+this.state.losses)).toFixed(2)}%<br/>
				</h2>
				Clan level: {this.state.level}<br/>
				Current experience: {this.state.curExp}<br/>
				Total experience: {this.state.totalExp}<br/>
				Games played: {this.state.wins + this.state.losses}<br/>
			</div>
		);
  }

}

export default Guide;
