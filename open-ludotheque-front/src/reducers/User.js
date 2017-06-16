// specific action
import {USER_LOGGED, USER_LOGGED_OUT} from '../actions/User.js'

export const userInitialState = {
    email: "",
    isAuthenticated: false,
    firstName: "",
    lastName: ""
};

export const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return Object.assign({}, state, {
                email: action.email,
                //firstName: action.firstName,
                //lastName: action.lastName,
                isAuthenticated: true
            });
        case USER_LOGGED_OUT:
            return Object.assign({}, state, {
                email: "",
                firstName: "",
                lastName: "",
                isAuthenticated: false
            });
        default:
            return state;
    }
};