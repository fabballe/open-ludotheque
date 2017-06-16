import { push } from 'react-router-redux'

import {signUp, signIn} from '../service/UserService.js';

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
                dispatch(userSignIn(email,password));
                //TODO: gerer l'erreur
            }).catch(e => {
                console.log(e);
            });
    }
}

export function userSignIn(email, password){
    return function (dispatch) {

        return signIn(email, password)
            .then(() => {
                // l'utilisateur est loggué
                dispatch(userLogged(email));

                // nous redirigons vers l'accueil
                dispatch(push('/'));
            }).catch(e => {
                console.log(e);
            });

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