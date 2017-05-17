import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Redux form
import {reducer as formReducer} from 'redux-form'

// specific action
import {ADD_COMIC, RECEIVE_COMIC} from '../actions/comic.js'
import {LOG_USER} from '../actions/login.js'

const initialState = {
    products: [],
    user : ""
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

function login(state = initialState, action){
    switch (action.type) {
        case LOG_USER:
            console.log("reducers login action");
            return Object.assign({}, state, {
               user: action.email
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    comics,
    login,
    routing: routerReducer,
    form: formReducer
});

export default rootReducer;