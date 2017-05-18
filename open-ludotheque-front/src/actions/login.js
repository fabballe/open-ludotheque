import { push } from 'react-router-redux'

//import fetch from 'isomorphic-fetch';
//export const LOG_USER = 'LOGIN_USER';
export const USER_LOGGED = 'USER_LOGGED';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export function userLogged(email) {
    return { type: USER_LOGGED, email}
}

export function userLoggedOut() {
    return { type: USER_LOGGED_OUT}
}

export function logUser(email, password){
    return function (dispatch) {
        // TODO Appeler le backoffice pour faire l'authentification

        // l'utilisateur est loggué
        dispatch(userLogged(email));

        // nous redirigons vers l'accueil
        dispatch(push('/'));
    }
}

export function logoutUser() {
    return function (dispatch) {
        // TODO Appeler le backoffice pour faire le logout

        // l'utilisateur est déloggué
        dispatch(userLoggedOut());

        // nous redirigons vers l'accueil
        dispatch(push('/'));
    }
}