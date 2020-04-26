import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { deck, dealer, player } from './reducers';

const reducers = {
    deck,
    dealer,
    player,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
    createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );