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

export function userSignUp(user){
    return function (dispatch){
        return signUp(user)
            .then(() => {
                // une fois le compte créé nous loggons l'utilisateur
                dispatch(userSignIn(user.email,user.password));
            }).catch(e => {
                //TODO: gerer l'erreur
                console.log(e);
            });
    }
}

export function userLoadData(){
    return function (dispatch){
        return loadUserData()
            .then(response => response.json())
            .then((user) => {
            // nous arrivons à récupérer les données de l'utilisateur. Nous sommes donc authentifié
            dispatch(userLogged(user));
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
                dispatch(userLoadData());
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