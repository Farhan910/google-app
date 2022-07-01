import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarApi = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="flex justify-center mt-12">
        <Calendar onChange={onChange} value={value} />
      </div>
    );
};

export default CalendarApi;