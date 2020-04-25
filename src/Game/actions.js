export const INITIALIZE_DECK = 'INITIALIZE_DECK';
export const RESET = 'INITIALIZE_DECK';
export const initializeDeck = deck => ({
    type: INITIALIZE_DECK,
    payload: { deck }
});

export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const shuffleDeck = deck => ({
    type: SHUFFLE_DECK,
    payload: { deck }
});

export const DEAL_CARD = 'DEAL_CARD';
export const addCard = (deck, hand) => ({
    type: DEAL_CARD,
    payload: { deck, hand }
});

export const DEAL_CARD_DEALER = 'DEAL_CARD_DEALER';
export const addCardDealer = (deck, hand) => ({
    type: DEAL_CARD_DEALER,
    payload: { deck, hand }
});