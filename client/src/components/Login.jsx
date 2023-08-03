import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const handleLogout = () => {
        history.push('/');
    }

    return (
        <div>
            
        </div>
    );
};

export default Logout;
