import React from 'react';
import {UserIconProps} from "../types/UserTypes";


const UserIcon: React.FC<UserIconProps> = ({letter}) => {
    return (
        <div className="rounded-full bg-amber-200 h-10 w-10 ml-4 mr-4 flex justify-center items-center">
            <span className="text-lg">{letter}</span>
        </div>
    );
};

export default UserIcon;
