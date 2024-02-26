import React, {useState} from 'react';
import {AddPopupProps} from "../types/UserTypes";


const AddPopup: React.FC<AddPopupProps> = ({isOpen, closePopup, addUser}) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleAddUser = () => {
        const newUser: { firstName: string; lastName: string; state: string; creationDate: Date; email: string } = {
            firstName,
            lastName,
            email,
            state: 'Actif',
            creationDate: new Date()
        };
        addUser(newUser);
        setFirstName('');
        setLastName('');
        setEmail('');
        closePopup();
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <div className="bg-white rounded-md shadow-md p-4">
                        <h3 className="text-lg font-semibold mb-4">Ajouter un nouvel utilisateur</h3>
                        <input type="text" className="border border-gray-300 rounded-md mb-2 p-2 w-full"
                               placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        <input type="text" className="border border-gray-300 rounded-md mb-2 p-2 w-full"
                               placeholder="Nom de famille" value={lastName}
                               onChange={(e) => setLastName(e.target.value)}/>
                        <input type="email" className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                               placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <div className="flex justify-end">
                            <button className="bg-blue-950 text-white text-xs pr-4 pl-4 rounded-2xl font-semibold mr-2"
                                    onClick={handleAddUser}>Ajouter
                            </button>
                            <button className="bg-gray-300 text-gray-700 text-xs pr-4 pl-4 rounded-2xl font-semibold"
                                    onClick={closePopup}>Annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddPopup;
