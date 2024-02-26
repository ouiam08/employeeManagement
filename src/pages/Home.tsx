import React from 'react';
import Navbar from "../components/Navbar";
import UserContainer from "../containers/UserContainer";

const Home = () => {
    return (
        <div className="ml-72 mr-72 mt-10">
            <div className="mb-5"><Navbar/></div>
            <UserContainer/>
        </div>
    );
};

export default Home;
