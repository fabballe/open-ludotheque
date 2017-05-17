//import fetch from 'isomorphic-fetch';

export const LOG_USER = 'LOGIN_USER';

export function logUser(email, password) {
    return { type: LOG_USER, email, password}
}