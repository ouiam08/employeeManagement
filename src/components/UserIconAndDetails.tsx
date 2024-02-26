import UserIcon from "./UserIcon";
import UserDetails from "./UserDetails";
import React from "react";
import {UserIconAndDetailsProps} from "../types/UserTypes";

const UserIconAndDetails: React.FC<UserIconAndDetailsProps> = ({letter, firstName, lastName, email}) => {
    return <div className="flex">
        <UserIcon letter={letter}/>
        <UserDetails firstName={firstName} email={email} lastName={lastName}/></div>


}

export default UserIconAndDetails;