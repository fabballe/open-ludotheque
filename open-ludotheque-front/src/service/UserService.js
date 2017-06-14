import fetch from 'isomorphic-fetch';

import {BASE_URL} from './UtilService.js';

/**
 * Créer un utilisateur dans le system
 * @param email l'email de l'utilisateur
 * @param password le mot de passe de l'utilisateur
 * @returns {*} la promesse
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