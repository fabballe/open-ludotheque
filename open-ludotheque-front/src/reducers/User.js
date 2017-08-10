// specific action
import {USER_LOGGED, USER_LOGGED_OUT} from '../actions/User.js'

export const userInitialState = {
    isAuthenticated: false,
    email: "",
    firstName: "",
    lastName: "",
    comicVineAPIKey: ""
};

export const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return Object.assign({}, state, {
                isAuthenticated: true,
                email: action.user.email,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                comicVineAPIKey: "10c75289793163d7e3acd957fece948bcd364b3a"
            });
        //FIXME: sotcker la clé par utilisateur
        case USER_LOGGED_OUT:
            return Object.assign({}, state, {
                email: "",
                firstName: "",
                lastName: "",
                comicVineAPIKey: "",
                isAuthenticated: false
            });
        default:
            return state;
    }
};