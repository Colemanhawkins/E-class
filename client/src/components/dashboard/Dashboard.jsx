import React from 'react';
import UseAuth from '../../utils/UseAuth.js';
import { useSelector } from 'react-redux';


const Dashboard = () => {
    const code = useSelector((state) => ({...state.code}));
    const accessToken = UseAuth(code);
    console.log(code);
    return (
        <div>
            
        </div>
    )
}

export default Dashboard
