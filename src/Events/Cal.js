import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Cal.css';

function Cal() {

    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    }

    var d = date.toDateString();
    console.log(d);

    return (
        <Calendar
            onChange={onChange}
            value={date}
        />
    )
}

export default Cal