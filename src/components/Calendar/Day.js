import React from 'react';

export default function Day({dateInfo, pickDate}){
    if(dateInfo == null){
        return <button className="disableButton" disabled/>
    }
   
    return <button type="button" className="dateButton" onClick={pickDate.bind(this, dateInfo)}>{dateInfo.getDate()}</button>
    
}