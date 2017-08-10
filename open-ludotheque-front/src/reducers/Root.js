import { combineReducers } from 'redux'

// React Redux Route
import { routerReducer } from 'react-router-redux'

// Redux form
import {reducer as formReducer} from 'redux-form'

// specific action
import {ADD_COMIC, RECEIVE_COMIC} from '../actions/Comic.js'

import {userReducer} from './User.js';
import {navigationReducer} from './Navigation.js';
import {modalReducer} from './Modal.js';

//const initialState = {
//    products: []
//};
//
//function comics(state = initialState, action) {
//    switch (action.type) {
//        case ADD_COMIC:
//            return Object.assign({}, state, {
//                products: [
//                    ...state.products,
//                    {
//                        name: action.name
//                    }
//
//                ]
//            });
//        case RECEIVE_COMIC:
//            return Object.assign({}, state, {
//                products: action.products
//            });
//        default:
//            return state
//    }
//}

const rootReducer = combineReducers({
    //comics,
    user: userReducer,
    navigation: navigationReducer,
    modal: modalReducer,
    routing: routerReducer,
    form: formReducer
});

export default rootReducer;