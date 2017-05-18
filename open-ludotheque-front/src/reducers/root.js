import { combineReducers } from 'redux'

// React Redux Route
import { routerReducer } from 'react-router-redux'

// Redux form
import {reducer as formReducer} from 'redux-form'

// specific action
import {ADD_COMIC, RECEIVE_COMIC} from '../actions/comic.js'
import {USER_LOGGED} from '../actions/login.js'

const initialState = {
    products: []
};

const userInitialState = {
    login: "",
    isAuthenticated: false
};

function comics(state = initialState, action) {
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

function loginReducer(state = userInitialState, action) {
    switch (action.type) {
        case USER_LOGGED:
            return Object.assign({}, state, {
                login: action.email,
                isAuthenticated: true
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    comics,
    user: loginReducer,
    routing: routerReducer,
    form: formReducer
});

export default rootReducer;