import { createSto } from 'redux';

import { Reducer } from './reducer';
const myStore = createStore(Reducer);

export default myStore;
