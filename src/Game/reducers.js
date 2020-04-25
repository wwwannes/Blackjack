import _ from 'lodash';

import jsonDeck from '../deck.json';
import {
    INITIALIZE_DECK,
    SHUFFLE_DECK,
    DEAL_CARD,
    DEAL_CARD_DEALER,
} from './actions'

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
            return state.concat( addCardToHand(payload) );
        default:
            console.log("playerCards default");
            return state;
    }
}

export const dealerCards = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case DEAL_CARD_DEALER:
            return state.concat( addCardToHand(payload) );
        default:
            console.log("dealerCards default");
            return state;
    }
}

function addCardToHand(card){
    const newCard = {
        'value': card.deck[0].value,
        'suit': card.deck[0].suit
    };

    _.remove(card.deck, card.deck[0]);

    return newCard;
}