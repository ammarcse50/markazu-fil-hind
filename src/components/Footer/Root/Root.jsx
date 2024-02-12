import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;