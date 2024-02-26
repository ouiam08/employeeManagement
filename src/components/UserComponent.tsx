import React from 'react';
import UserIconAndDetails from './UserIconAndDetails';
import DateDetails from './DateDetails';
import UserState from './UserState';
import UserActions from './UserActions';
import {UserComponentProps} from "../types/UserTypes";

const UserComponent: React.FC<UserComponentProps> = ({
                                                         firstName,
                                                         lastName,
                                                         email,
                                                         letter,
                                                         colorText,
                                                         colorBg,
                                                         date,
                                                         time,
                                                         state,
                                                         openPopup
                                                     }) => {
    return (
        <div className="border-2 rounded-md border-blue-950 border-b-4 bg-white h-12.5 p-1 flex flex-row mb-2">
            <div className="flex-1">
                <UserIconAndDetails email={email} firstName={firstName} lastName={lastName} letter={letter}/>
            </div>
            <div className="flex-1">
                <DateDetails date={date} time={time}/>
            </div>
            <div className="flex-1">
                <UserState colorBg={colorBg} colorText={colorText} state={state}/>
            </div>
            <div className="flex-1">
                <UserActions openPopup={openPopup}/>
            </div>
        </div>
    );
};

export default UserComponent;
