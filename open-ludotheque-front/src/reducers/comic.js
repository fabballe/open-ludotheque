//{
//    products: [
//        //{"id": "1", name: "walking dead"},
//        //{"id": "2", name: "Mutafukaz"},
//        //{"id": "3", name: "One Piece"}
//    ]
//}

import {ADD_COMIC, LOAD_COMIC, RECEIVE_COMIC} from '../actions/comic'

const initialState = {
    products: []
};

export default function openludothequeApp(state = initialState, action){
    switch (action.type) {
        case ADD_COMIC:
            return Object.assign({}, state, {
                products: [
                    ...state.products,
                    {
                        name: action.name
                    }

                ]
            });
        case RECEIVE_COMIC:
            return Object.assign({}, state, {
                products: action.comics
            });
            //fetch("http://localhost:8080/comics")
            //    .then(response => response.json())
            //    .then(json => {
            //        return Object.assign({}, state, {
            //            products: json._embedded.comics
            //        });
            //    });
        default:
            return state
    }

}