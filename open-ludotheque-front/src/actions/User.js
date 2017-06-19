import { push } from 'react-router-redux'

import {signUp, signIn, loadUserData} from '../service/UserService.js';

export const USER_LOGGED = 'USER_LOGGED';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export function userLogged(user) {
    return { type: USER_LOGGED , user}
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
            }).catch(e => {
                //TODO: gerer l'erreur
                console.log(e);
            });
    }
}

export function userSignIn(email, password){
    return function (dispatch) {

        return signIn(email, password)
            .then((response) => {
                const jwtToken = response.headers.get("Authorization");

                localStorage.setItem("openLudotheque-jwtToken", jwtToken);

            }).then(() => {
                return loadUserData();
            }).then(response => response.json())
            .then((user) => {
                // l'utilisateur est loggué
                dispatch(userLogged(user));

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

        localStorage.removeItem("openLudotheque-jwtToken");

        // l'utilisateur est déloggué
        dispatch(userLoggedOut());

        // nous redirigons vers l'accueil
        dispatch(push('/'));
    }
}