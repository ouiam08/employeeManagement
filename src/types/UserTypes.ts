export type UserIconProps = {
    letter: string;
}

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    creationDate: Date;
    state: string;

}
export type UserDetailsProps = {
    firstName: string;
    lastName: string;
    email: string;
}

export type UserIconAndDetailsProps = {
    letter: string;
    firstName: string;
    lastName: string;
    email: string;
}

export type UserStateProps = {
    state: string;
    colorText: string,
    colorBg: string,
}

export type DateDetailsProps = {
    date: string;
    time: string;
}

export type UserComponentProps = {
    date: string;
    time: string;
    state: string;
    colorText: string,
    colorBg: string,
    letter: string;
    firstName: string;
    lastName: string;
    email: string;
    openPopup: () => void;
}

export type UserItemProps = {
    date: string,
    time: string,
    state: string,
    colorText: string,
    colorBg: string,
    letter: string,
    firstName: string,
    lastName: string,
    email: string,
}

export type UserActionsProps = {
    openPopup: () => void;
}

export type ActionComponentProps = {
    isOpen: boolean;
    closePopup: () => void;
    handleSuspend: () => void;
    handleDelete: () => void;
}

export type UserContainerProps = {
    isAddPopupOpen: boolean;
    setIsAddPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AddPopupProps = {
    isOpen: boolean;
    closePopup: () => void;
    addUser: (newUser: {
        firstName: string;
        lastName: string;
        state: string;
        creationDate: Date;
        email: string
    }) => void;
};

