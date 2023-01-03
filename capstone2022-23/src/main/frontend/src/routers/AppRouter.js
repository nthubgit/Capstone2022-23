import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;
