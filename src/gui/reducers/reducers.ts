import lang from './lang';
import route from './route';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
    lang,
    route
});

export default Reducers;
