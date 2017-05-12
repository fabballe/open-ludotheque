/**
 * Created by fabballe on 12/05/17.
 */

import { createStore } from 'redux'
import openludothequeApp from '../reducers/comic'

let store = createStore(openludothequeApp);

export default store;

