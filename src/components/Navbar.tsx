import React from 'react';

const Navbar = () => {
    return (
        <div className="flex font-normal justify-between">
            <h2 className="text-blue-950 font-bold">Nemos</h2>
            <button className="bg-blue-950 text-white text-xs pr-4 pl-4 rounded-2xl font-semibold">Ajouter</button>
        </div>
    );
};

export default Navbar;
