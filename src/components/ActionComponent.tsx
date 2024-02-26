import React from 'react';
import {ActionComponentProps} from "../types/UserTypes";

const ActionComponent: React.FC<ActionComponentProps> = ({isOpen, closePopup, handleSuspend, handleDelete}) => {
    return (
        <>
            {isOpen && (
                <div className="  w-full h-full flex items-center justify-end relative top-1 left-1">
                    <div className="bg-white rounded-md shadow-md p-4">
                        <div className="mb-2">
                            <button
                                className="text-gray-500 hover:text-gray-700 absolute right-4 top-4"
                                onClick={closePopup}
                            >

                            </button>
                        </div>
                        <div className="mb-4">
                            <button
                                className="btn btn-outline block w-full mb-2"
                                onClick={handleSuspend}
                            >
                                Suspendre
                            </button>
                            <hr className="my-2 border-gray-300"/>
                            <button
                                className="btn btn-danger block w-full"
                                onClick={handleDelete}
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ActionComponent;
