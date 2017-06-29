import React from 'react';

import { Route } from 'react-router'

import PrivateRoute from './PrivateRoute.js'

import Home from '../components/presentational/Home.js'

/* Forms component */
import LoginForm from '../components/forms/LoginForm.js'
import RegisterForm from '../components/forms/RegisterForm.js'


import MyCollectionList from '../components/container/MyCollectionList.js';

export const getRoutes = (store) => {
    return (
        <div>
            <PrivateRoute path="/myCollectionList" component={MyCollectionList} />

            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm}/>
            <Route exact path="/" component={Home}/>
        </div>
    ) ;
};