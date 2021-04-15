import { createStore } from 'redux';
import Reducers from '../reducers/reducers';

const stateStore = createStore(
    Reducers,
);

export default stateStore;
