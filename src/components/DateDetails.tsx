import React from 'react';
import {DateDetailsProps} from "../types/UserTypes";

const DateDetails: React.FC<DateDetailsProps> = ({date, time}) => {
    return (
        <div className="text-sm mb-2 font-thin text-blue-950 justify-end ml-9">
            <div>Date de création</div>
            <div className="flex ">
                <div className="mr-4">{date}</div>
                <div>{time}</div>
            </div>

        </div>
    );
};

export default DateDetails;