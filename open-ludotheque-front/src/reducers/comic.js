//{
//    products: [
//        //{"id": "1", name: "walking dead"},
//        //{"id": "2", name: "Mutafukaz"},
//        //{"id": "3", name: "One Piece"}
//    ]
//}

import {ADD_COMIC, RECEIVE_COMIC} from '../actions/comic'
import { combineReducers } from 'redux'


const initialState = {
    products: []
};

function comics(state = initialState, action){
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
                products: action.products
            });
        default:
            return state
    }

}

const rootReducer = combineReducers({
    comics
});

export default rootReducer;