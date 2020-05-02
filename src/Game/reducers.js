import _ from 'lodash';

import jsonDeck from '../deck.json';
import {
    INITIALIZE_DECK,
    INITIALIZE_PLAYER,
    INITIALIZE_DEALER,
    PLAYER_STOPPED,
    DEAL_CARD,
    DEAL_CARD_DEALER,
} from './actions'

export const deck = (state = [], action) => {
    const {type} = action;
    switch(type){
        case INITIALIZE_DECK:
            return _.shuffle(JSON.parse(JSON.stringify(jsonDeck)).cards);
        default:
            return state;
    }
}

export const player = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case INITIALIZE_PLAYER:
            return {
                ...state,
                isPlaying: true,
                hand: [],
                total: 0
            };
        case DEAL_CARD:
            const card = addCardToHand(payload);
            return{
                ...state,
                hand: state.hand.concat(card),
                total: calculateTotal(card, state.total)
            }
        case PLAYER_STOPPED:
            return {
                ...state,
                isPlaying: false
            };
        default:
            return state;
    }
}

export const dealer = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case INITIALIZE_DEALER:
            return {
                ...state,
                isPlaying: false,
                hand: [],
                total: 0
            };
        case DEAL_CARD_DEALER:
            const card = addCardToHand(payload);
            let playing = false;
            let totalCards = 0;

            if(_.size(state.hand) >= 1 && _.size(state.hand) < 2 && !state.isPlaying){
                totalCards = calculateTotal(state.hand[0], 0);
            } else if(_.size(state.hand) >= 2){
                playing = true;
                totalCards = calculateTotal(card, state.total);
            }

            return{
                ...state,
                hand: state.hand.concat(card),
                total: totalCards,
                isPlaying: playing
            }
        default:
            return state;
    }
}

function addCardToHand(card, hidden = false){

    {/* Shuffle deck before adding new card to hand */}
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

function calculateTotal(card, total){
    if(card.value === "J" || card.value === "Q" || card.value === "K"){
        total += 10
    } else if(card.value === "A"){
        if(total + 11 > 21){
            total += 1;
        } else {
            total += 11;
        }
    } else {
        total += card.value
    }

    return total;
}