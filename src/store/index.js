import reducer from './reducer'
import { createStore } from 'redux'
let db = require('./db.json');

const store = createStore(reducer, db);

export default store
