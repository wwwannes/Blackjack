import _ from 'lodash';
import {
    INITIALIZE_DECK,
    SHUFFLE_DECK,
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

            {/* Remove card from the deck */}
            _.remove(payload.deck, payload.deck[0]);

            return state.concat(newCard);
        default:
            console.log("playerCards default");
            return state;
    }
}