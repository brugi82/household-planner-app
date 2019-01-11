import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './../reducers/rootReducer';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

export const history = createBrowserHistory();

export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer(history),
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                routerMiddleware(history))
        )
    );
}