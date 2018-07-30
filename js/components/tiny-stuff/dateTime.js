import React from 'react';

const DateAndTime = () => {

    let dateObj = new Date(),
        hour = dateObj.getHours(),
        minutes = dateObj.getMinutes(),
        day = dateObj.getDay(),
        date = dateObj.getDate(),
        month = dateObj.getMonth();
        
    if( minutes < 10 ){
        minutes = 0 + minutes.toString();
    }
    if( hour < 10 ){
        hour = 0 + hour.toString() ; 
    }

    let monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
    let daysOfWeeks = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    return (
        <div className="miw-date-time-wrap" > { `${daysOfWeeks[day]} ${monthNames[month]} ${date} ${hour}:${minutes}` } </div>
    );

}

export default DateAndTime;