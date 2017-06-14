// specific action
import {USER_LOGGED, USER_LOGGED_OUT} from '../actions/User.js'

export const userInitialState = {
    login: "",
    isAuthenticated: false
};

export const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return Object.assign({}, state, {
                login: action.email,
                isAuthenticated: true
            });
        case USER_LOGGED_OUT:
            return Object.assign({}, state, {
                login: "",
                isAuthenticated: false
            });
        default:
            return state;
    }
};