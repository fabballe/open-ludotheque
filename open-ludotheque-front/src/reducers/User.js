// specific action
import {USER_LOGGED, USER_LOGGED_OUT} from '../actions/User.js'

export const userInitialState = {
    isAuthenticated: false,
    email: "",
    firstName: "",
    lastName: ""
};

export const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return Object.assign({}, state, {
                isAuthenticated: true,
                email: action.user.email,
                firstName: action.user.firstName,
                lastName: action.user.lastName
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