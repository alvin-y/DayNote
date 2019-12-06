import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';

import Calendar from './components/Calendar/Calendar';

class Main extends React.Component{
	state = {
		sideHidden: false

	};

	sidebarToggle = () => {
		this.setState((prevState) => {
			return{sideHidden: !prevState.sideHidden};
		});
	};

	backdropToggle = () => {
		this.setState({sideHidden: false});
	};

	render(){
		let backdrop;

		if(this.state.sideHidden){
			backdrop = <Backdrop click={this.backdropToggle}/>
		}

		return(
			<div style={{height: '100%'}}>
				<Topbar sidebarToggler={this.sidebarToggle} />
				<Sidebar show={this.state.sideHidden} 	/>
				{backdrop}
				<main style={{marginTop: '64px'}}>
					<Calendar month={new Date().getMonth()} year={new Date().getFullYear()}/>
				</main>
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));






class HideButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hidden : false,
		};
	}
	
	showStuff = () => {
		var table = document.getElementById("table");		
		table.style.display = "block";
		this.setState({hidden : !this.state.hidden});
	}	

	hideStuff = () => {
		var table = document.getElementById("table");
		table.style.display = "none";		
		this.setState({hidden : !this.state.hidden});
	}	

	render(){
		if(this.state.hidden){
			return(
				<div>
					<button type="button" onClick={this.showStuff}>Show</button>
				</div>
			);
		}else{
			return(
				<div>
					<button type="button" onClick={this.hideStuff}>Hide</button>
				</div>
			);
		}
	}
}

//ReactDOM.render(<HideButton />, document.getElementById('button'));

class Table extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value : '',
			Notes : [],
		}
	}
	
	onChangeValue = event => {
		this.setState({value : event.target.value});
	};
	
	onAddItem = () => {
		this.setState(state => {
			if(!state.Notes.includes(state.value)){
				const Notes = state.Notes.concat(state.value);
				return {
					Notes,
					value: '',
				};
			}else{
				return {
					value : '',
				};
			}
		});
	};
	
	onDeleteItem = i => {
		this.setState(state => {
			const Notes = state.Notes.filter((item, j) => i !== j);
			
			return { 
				Notes,
			};
		});
	};
	
	renderEntry(){
		return this.state.Notes.map((note, remove) => {
			return(
				<tr key={note}>
					<td>{note}</td>
					<td><button type="button" onClick={() => this.onDeleteItem(remove)}> X </button></td>
				</tr>
			)
		})
	}
	
	render(){
		return(
			<div>
				<input type="text" value={this.state.value} onChange={this.onChangeValue}/>
				<button type="button" onClick={this.onAddItem} disabled={!this.state.value}>Add</button>
				<table>
					<tbody>
						{this.renderEntry()}
					</tbody>
				</table>
			</div>
		);
	}
}

//ReactDOM.render(<Table />, document.getElementById('table'));
