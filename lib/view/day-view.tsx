import React from 'react';

import {ViewData} from '../interface';

export interface ViewProps {
    data: ViewData[];
    type?: 'day'|'month'|'year';
};

export const DayView: React.FC<ViewProps> = (props: ViewProps) => {
    let {data} = props;
    return (<div className="day-view">
        {
            data.map(
                item => (
                    <div key={item.value} className="view-item">{item.label}</div>
                )
            )
        }
    </div>);
};
