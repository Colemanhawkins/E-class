import React from 'react';
import UseAuth from '../../utils/UseAuth.js';

const Dashboard = () => {
    const code = localStorage.getItem('Code')
    const accessToken = UseAuth(code);

    return (
        <div>
            
        </div>
    )
}

export default Dashboard
    