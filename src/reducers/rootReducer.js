import {combineReducers} from 'redux';
import registrationRequest from './registerReducer';

const rootReducer = combineReducers({
    registrationRequest
});

export default rootReducer;