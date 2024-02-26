import React from 'react';
import {UserDetailsProps} from "../types/UserTypes";

const UserDetails: React.FC<UserDetailsProps> = ({firstName, lastName, email}) => {
    return (
        <div>
            <div className=" font-bold text-sm">{firstName} {lastName}</div>
            <div className="text-sm mb-2 font-thin text-blue-950 ">{email}</div>
        </div>
    );
};

export default UserDetails;