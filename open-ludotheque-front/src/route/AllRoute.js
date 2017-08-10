import React, {Component} from 'react';

import { Route} from 'react-router'

//import PrivateRoute from './PrivateRoute.js'

import Home from '../components/presentational/Home.js'
import LoginForm from '../components/forms/LoginForm.js'
import RegisterForm from '../components/forms/RegisterForm.js'
import MyCollectionList from '../components/container/MyCollectionList.js';
import AddCollectionForm from '../components/forms/AddCollectionForm.js';

// TODO: gerer les routes privés qd react-router-redux ne sera plsu en alpha */
class AllRoute extends Component {
    render(){
        return (<div>
            <Route path="/myCollectionList" component={MyCollectionList} />

            <Route path="/addCollection" component={AddCollectionForm} />

            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm}/>
            <Route exact path="/" component={Home}/>
        </div>);
    };
};

//AllRoute.propTypes = {
//    isAuthenticated: PropTypes.bool.isRequired
//};

export default AllRoute;