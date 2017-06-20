import fetch from 'isomorphic-fetch';

import {BASE_URL} from './UtilService.js';

export function loadMyCollection(){
    return fetch(BASE_URL+"/api/secure/collections", {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem("openLudotheque-jwtToken")
        }
    });
}