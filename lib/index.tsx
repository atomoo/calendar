import React from 'react';

import {DayView} from './view/day-view';
import {ViewData} from './interface';

const data: ViewData[] = [];

let index = 1;
while (index < 31) {
    data.push({value: `${index}`, label: index});
    index++;
}

const Calendar: React.FC<any> = () => {
    return (<div>
        calendar
        <div className="calendar-wrapper">
            <DayView data={data} />
        </div>
    </div>);
};

export default Calendar;
