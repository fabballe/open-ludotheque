import { push } from 'react-router-redux'

import {signUp} from '../service/UserService.js';

export const USER_LOGGED = 'USER_LOGGED';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export function userLogged(email) {
    return { type: USER_LOGGED, email}
}

export function userLoggedOut() {
    return { type: USER_LOGGED_OUT}
}

export function userSignUp(email, password){
    return function (dispatch){
        return signUp(email,password)
            .then(() => {
                // une fois le compte créé nous loggons l'utilisateur
                dispatch(logUser(email,password));
                //TODO: gerer l'erreur
            });
    }
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