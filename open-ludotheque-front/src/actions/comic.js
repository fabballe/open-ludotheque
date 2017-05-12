import fetch from 'isomorphic-fetch'

export const ADD_COMIC = 'ADD_COMIC';
export const LOAD_COMIC = 'LOAD_COMIC';
export const RECEIVE_COMIC = 'RECEIVE_COMIC';

export function addComic(name) {
    return { type: ADD_COMIC, name}
}

export function loadComic(products) {
    return { type: LOAD_COMIC, products}
}

export function receiveComic(json) {
    return { type: RECEIVE_COMIC,
        comics: json._embedded.comics
    }
}

export function fetchComic(){
    return function (dispatch) {
        return fetch("http://localhost:8080/comics")
            .then(response => response.json())
            .then(json => {
                dispatch(receiveComic(json));
            });
    }
}