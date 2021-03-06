import React from 'react';

import { Link } from 'react-router-dom';

const WelcomeComponent = () => (
    <div className="container-fluid">
        Hello, welcome to the my application. This application includes basic routing and integration with bootstrap v4.

        <p>Click on the button below to continue.</p>
        <Link className="btn btn-primary" to="/snap">Continue</Link>
    </div>

);

export default WelcomeComponent;

