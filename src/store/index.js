import { combineReducers } from 'redux';
import dialog from './dialog';

const rootReducer = combineReducers({
    dialog,
});

export function* rootSaga() {}

export default rootReducer;
