export const COLLECTION_LOADED = 'COLLECTION_LOADED';

import {loadMyCollection} from '../service/CollectionService.js';

export function collectionLoaded(json) {
    return {
        type: COLLECTION_LOADED,
        collections: json._embedded.comics
    }
}

export function fetchCollection() {
    return function (dispatch) {
        return loadMyCollection()
            .then((response) => response.toJSON())
            .then((json) => {
                dispatch(collectionLoaded(json));
            });
    }
}