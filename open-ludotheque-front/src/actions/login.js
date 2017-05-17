//import fetch from 'isomorphic-fetch';

export const LOG_USER = 'LOGIN_USER';

export function logUser(email, password) {
    // TODO Appeler le backoffice pour faire l'authentification
    return { type: LOG_USER, email, password}
}