import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button className="btn btn-primary" onClick={signInUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;