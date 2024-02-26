import React, {useEffect, useState} from 'react';
import {Users} from '../Users';
import UserComponent from "../components/UserComponent";
import {UserItemProps} from "../types/UserTypes";
import ActionComponent from "../components/ActionComponent";

const UserContainer: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<UserItemProps | null>(null);
    const [users, setUsers] = useState<UserItemProps[]>([]);

    useEffect(() => {
        const transformedUsers: UserItemProps[] = Users.map(user => ({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            letter: user.firstName.charAt(0),
            colorText: getTextColor(user.state),
            colorBg: getBgColor(user.state),
            date: extractDateTime(user.creationDate).date,
            time: extractDateTime(user.creationDate).time,
            state: user.state.toUpperCase()
        }));

        setUsers(transformedUsers);
    }, []);

    const openPopup = (user: UserItemProps) => {
        setSelectedUser(user);
        setIsOpen(true);
    };

    const closePopup = () => setIsOpen(false);

    const handleSuspend = () => {
        if (selectedUser) {
            const updatedUsers = users.map(user =>
                user === selectedUser ?
                    {
                        ...user,
                        state: 'SUSPENDU',
                        colorText: getTextColor('SUSPENDU'),
                        colorBg: getBgColor('SUSPENDU')
                    }
                    : user
            );
            setUsers(updatedUsers);
            closePopup();
        }
    };


    const handleDelete = () => {
        if (selectedUser) {
            const updatedUsers = users.filter(user => user !== selectedUser);
            setUsers(updatedUsers);
            closePopup();
        }
    };

    const extractDateTime = (date: Date) => {
        const formattedDate = date.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'});
        const formattedTime = date.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'});
        return {date: formattedDate, time: formattedTime};
    };

    const getTextColor = (state: string) => {
        return state === 'Actif' ? 'text-lime-500' : 'text-amber-200';
    };

    const getBgColor = (state: string) => {
        return state === 'Actif' ? 'bg-lime-500' : 'bg-amber-200';
    };

    return (
        <>
            {users.map((user, index) => (
                <UserComponent
                    key={index}
                    colorText={user.colorText}
                    colorBg={user.colorBg}
                    firstName={user.firstName}
                    letter={user.letter}
                    lastName={user.lastName}
                    state={user.state}
                    date={user.date}
                    time={user.time}
                    email={user.email}
                    openPopup={() => openPopup(user)}
                />
            ))}
            <ActionComponent
                isOpen={isOpen}
                closePopup={closePopup}
                handleSuspend={handleSuspend}
                handleDelete={handleDelete}
            />
        </>
    );
};

export default UserContainer;
