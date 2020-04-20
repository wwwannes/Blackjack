import _ from 'lodash';
import {
    INITIALIZE_DECK,
    SHUFFLE_DECK,
    REMOVE_CARD,
    DEAL_CARD
} from './actions'

import jsonDeck from '../deck.json';

export const deck = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case INITIALIZE_DECK:
            console.log("deck INITIALIZE_DECK")
            return _.shuffle(JSON.parse(JSON.stringify(jsonDeck)).cards);
        case SHUFFLE_DECK:
            const shuffledDeck = _.shuffle(payload.deck);
            console.log("deck SHUFFLE_DECK")
            return shuffledDeck;
        case REMOVE_CARD:
            console.log("deck REMOVE_CARD");
            return _.remove(state, state[0]);
        default:
            console.log("deck default")
            return state;
    }
}

export const playerCards = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case DEAL_CARD:
            const newCard = {
                'value': payload.deck[0].value,
                'suit': payload.deck[0].suit
            };
            console.log("playerCards DEAL_CARD");
            return state.concat(newCard);
        default:
            console.log("playerCards default");
            return state;
    }
}