import _ from 'lodash';

import jsonDeck from '../deck.json';
import {
    INITIALIZE_DECK,
    DEAL_CARD,
    DEAL_CARD_DEALER,
} from './actions'

export const deck = (state = [], action) => {
    const {type} = action;
    switch(type){
        case INITIALIZE_DECK:
            return _.shuffle(JSON.parse(JSON.stringify(jsonDeck)).cards);
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

    {/* Shuffle deck before addiing new card to hand */}
    const shuffledDeck = _.shuffle(card.deck);

    const newCard = {
        'value': shuffledDeck[0].value,
        'suit': shuffledDeck[0].suit
    };

    {/* Remove card from deck */}
    _.remove(card.deck, shuffledDeck[0]);

    return newCard;
}