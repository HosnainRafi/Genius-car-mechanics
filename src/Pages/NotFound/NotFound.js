import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button className="btn btn-danger m-5">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;