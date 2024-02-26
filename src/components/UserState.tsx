import React from 'react';
import {UserStateProps} from "../types/UserTypes";

const UserState: React.FC<UserStateProps> = ({state, colorText, colorBg}) => {
    return (
        <div className="flex items-center m-4 justify-end">
            <div className={"rounded-full  h-2 w-2 " + colorBg}>
            </div>
            <div className={"text-xs font-semibold ml-2 " + colorText}>{state}</div>
        </div>
    );
};


export default UserState;