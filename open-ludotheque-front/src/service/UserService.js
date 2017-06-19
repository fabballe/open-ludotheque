import fetch from 'isomorphic-fetch';

import {BASE_URL} from './UtilService.js';

/**
 * Créer un utilisateur dans le system
 * @param user les données représentant l'utilisateur
 * @returns {*} promise
 */
export function signUp(user){
    return fetch(BASE_URL+"/api/user", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName
        })
    });
}

/**
 * Log un utilisateur
 * @param login
 * @param password
 * @returns {*}
 */
export function signIn(login,password){
    return fetch(BASE_URL+"/api/authentication", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: login,
            password: password
        })
    });
}

export function loadUserData(){
    return fetch(BASE_URL+"/api/user", {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem("openLudotheque-jwtToken")
        }
    });
}