// specific action
import {SHOW_MODAL, HIDE_MODAL} from '../actions/Modal.js'

export const modalInitialState = {
    showModal: false
};

export const modalReducer = (state = modalInitialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                showModal: true
            });
        case HIDE_MODAL:
            return Object.assign({}, state, {
                showModal: false
            });
        default:
            return state;
    }
};