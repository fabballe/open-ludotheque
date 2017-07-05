// specific action
import {MENU_OPEN, MENU_CLOSE} from '../actions/Navigation.js'

export const navigationInitialState = {
    openMenu: false
};

export const navigationReducer = (state = navigationInitialState, action) => {
    switch (action.type) {
        case MENU_OPEN:
            return Object.assign({}, state, {
                openMenu: true
            });
        case MENU_CLOSE:
            return Object.assign({}, state, {
                openMenu: false
            });
        default:
            return state;
    }
};