import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import registrationRequest from './registerReducer';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    registrationRequest
});

export default rootReducer;