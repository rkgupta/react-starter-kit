import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Welcome from '../components/Welcome'
import Main from '../components/Main';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Welcome} exact={true} />
                <Route path="/snap" component={Main} />
            </Switch>
        </div>
    </BrowserRouter>
);



export default AppRouter;