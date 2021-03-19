import reducer from './reducer';
import { createStore } from 'redux';
import * as actions from '../store/actions';

let db = require('./db.json');

const store = createStore(reducer, db);
store.dispatch(actions.RestarMatch());

export default store
