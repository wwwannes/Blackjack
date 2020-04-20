export const INITIALIZE_DECK = 'INITIALIZE_DECK';
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
export const addCard = (deck, playerCards) => ({
    type: DEAL_CARD,
    payload: { deck, playerCards }
});

export const REMOVE_CARD = 'REMOVE_CARD';
export const removeCard = deck => ({
    type: REMOVE_CARD,
    payload: { deck }
})