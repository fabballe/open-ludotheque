import { push } from 'react-router-redux'

//import fetch from 'isomorphic-fetch';
export const LOG_USER = 'LOGIN_USER';
export const USER_LOGGED = 'USER_LOGGED';

export function userLogged(email, password) {
    return { type: LOG_USER, email, password}
}

export function logUser(email, password){
    return function (dispatch) {
        // TODO Appeler le backoffice pour faire l'authentification

        // l'utilisateur est loggué
        dispatch(userLogged(email, password));

        // nous redirigons vers l'accueil
        dispatch(push('/'));
    }
}