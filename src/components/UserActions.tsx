import React from 'react';
import {IoIosMore} from "react-icons/io";
import {UserActionsProps} from "../types/UserTypes";

const UserActions: React.FC<UserActionsProps> = ({openPopup}: UserActionsProps) => {
    return (
        <div className="flex items-center m-4 justify-end">
            <button onClick={openPopup}><IoIosMore/></button>
        </div>
    );
};

export default UserActions;
