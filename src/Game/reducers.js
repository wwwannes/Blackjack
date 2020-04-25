import _ from 'lodash';

import jsonDeck from '../deck.json';
import {
    INITIALIZE_DECK,
    PLAYER_STOPPED,
    DEAL_CARD,
    DEAL_CARD_DEALER,
} from './actions'

export const isPlaying = (state = [], action) => {
    const {type} = action;
    switch(type){
        case PLAYER_STOPPED:
            return false;
        default:
            return state;
    }
}

export const deck = (state = [], action) => {
    const {type} = action;
    switch(type){
        case INITIALIZE_DECK:
            return _.shuffle(JSON.parse(JSON.stringify(jsonDeck)).cards);
        default:
            return state;
    }
}

export const playerCards = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case DEAL_CARD:
            return state.concat( addCardToHand(payload) );
        default:
            return state;
    }
}

export const dealerCards = (state = [], action) => {
    const {type, payload} = action;

    console.log(state)

    switch(type){
        case DEAL_CARD_DEALER:
            return state.concat( addCardToHand(payload, true) );
        default:
            return state;
    }
}

function addCardToHand(card, hidden = false){

    {/* Shuffle deck before addiing new card to hand */}
    const shuffledDeck = _.shuffle(card.deck);

    const newCard = {
        'value': shuffledDeck[0].value,
        'suit': shuffledDeck[0].suit,
        'hidden' : hidden
    };

    {/* Remove card from deck */}
    _.remove(card.deck, shuffledDeck[0]);

    return newCard;
}