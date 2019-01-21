import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import account from './accountReducer';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    account
});

export default rootReducer;