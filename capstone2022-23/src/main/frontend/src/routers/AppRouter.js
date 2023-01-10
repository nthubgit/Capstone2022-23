import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import MyItemsPage from '../components/MyItemsPage';
import MyAccountPage from '../components/MyAccountPage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import NotFoundPage from '../components/NotFoundPage';
import ShopPage from '../components/ShopPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/myitems" component={MyItemsPage}/>
        <Route path="/myaccount" component={MyAccountPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route component={NotFoundPage}/>
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;
