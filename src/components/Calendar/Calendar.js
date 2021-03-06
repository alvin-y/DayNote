import React from 'react';

import './Calendar.css';

import DayLabel from './DayLabel.js';
import Day from './Day.js';

import { days, getMonth, getMonthWeeks } from './Helper.js';

class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            month: this.props.month,
            year: this.props.year, 
            selected: null
        }
    }

    selectDay = selectedDate =>{
        this.setState({selected: selectedDate.getDate()});
    }

    renderDay = (date, index) =>{ 
        return <Day key={index} dateInfo={date} pickDate={this.selectDay} />
    }

    up = () =>{
        if(this.state.month === 11){
            this.setState({month: 0, year: this.state.year+1, selected: null})
        }else{
            this.setState({month: this.state.month+1, selected: null});
        }
    }

    down = () =>{
        if(this.state.month === 0){
            this.setState({month: 11, year: this.state.year-1, selected: null})
        }else{
            this.setState({month: this.state.month-1, selected: null});
        }
    }

    render(){  
        const month = this.state.month;
        const year = this.state.year;
        const selected = this.state.selected;

        const weeks = getMonthWeeks(month, year); //note: this gives an array of days per week
        
        const dayLabels = days.map((label) => {
                return(
                    <DayLabel key={label} title={label}/>
                );
        });

        const dates = weeks.map((week, index) => {
            return(
                <div role="row" className="week" key={index}>
                    {week.map(this.renderDay)}
                </div>
            );
        });

        const upLabel = "-->";
        const downLabel = "<--"

        return(
            <div className="monthContainer">
                <div className="monthLabel">
                    <button onClick={this.down}>{downLabel}</button>
                    <div className="spacer" />
                    {getMonth(month)} {year}
                    <div className="spacer" />
                    <button onClick={this.up}>{upLabel}</button>
                </div>
                <div className="dayLabelContainer">{dayLabels}</div>
                {dates}

                <h1>{selected}</h1>
            </div>
        );
    }
}  

export default Calendar;