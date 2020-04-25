import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { deck, playerCards, dealerCards, isPlaying } from './reducers';

const reducers = {
    deck,
    playerCards,
    dealerCards,
    isPlaying
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
    createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );