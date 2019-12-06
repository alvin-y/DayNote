export const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

export const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function getMonth(index){
    return months[index];
}

export function getMonthWeeks(month, year){ //NOTE MONTHS START AT 0:JAN, 1: FEB ...
    const firstOfMonth = new Date(year, month, 1); //make date object to get the month's days
    const firstDay = firstOfMonth.getDay(); //0-6, 0=sunday

    const weeks = []; //make arr of arrs to hold each week; each week will hold a date number or a 0 to show it isn't in the month

    let weekIterator = []; //iterate weeks from first week
    let dayIterator = firstOfMonth; //iterate days from here

    for(let i = 0 ; i < firstDay; i++){
        weekIterator.push(null); //null is a filler object for days not in month
    }

    while(dayIterator.getMonth() === month){ //iterate each day until its no longer in the month
        if(weekIterator.length === 7){
            weeks.push(weekIterator);
            weekIterator = [];
        }

        weekIterator.push(dayIterator);
        dayIterator = new Date(year, month, dayIterator.getDate()+1); //increment day
    }

    while(weekIterator.length < 7){ //fill in remaining days with null
        weekIterator.push(null);
    }
    weeks.push(weekIterator); //final week of month

    return weeks;
}