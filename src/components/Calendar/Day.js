import React from 'react';

export default function Day({dateInfo}){
    if(dateInfo == null){
        return <button className="disableButton" disabled/>
    }
   
    return <button type="button" className="dateButton">{dateInfo.getDate()}</button>
    
}