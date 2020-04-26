export const INITIALIZE_DECK = 'INITIALIZE_DECK';
export const initializeDeck = deck => ({
    type: INITIALIZE_DECK,
    payload: { deck }
});

export const INITIALIZE_PLAYER = 'INITIALIZE_PLAYER';
export const initializePlayer = player => ({
    type: INITIALIZE_PLAYER,
    payload: { player }
});

export const INITIALIZE_DEALER = 'INITIALIZE_DEALER';
export const initializeDealer = dealer => ({
    type: INITIALIZE_DEALER,
    payload: { dealer }
});

export const PLAYER_STOPPED = 'PLAYER_STOPPED';
export const playerStopped = () => ({
    type: PLAYER_STOPPED
});

export const DEAL_CARD = 'DEAL_CARD';
export const addCard = (deck, player) => ({
    type: DEAL_CARD,
    payload: { deck, player }
});

export const DEAL_CARD_DEALER = 'DEAL_CARD_DEALER';
export const addCardDealer = (deck, dealer) => ({
    type: DEAL_CARD_DEALER,
    payload: { deck, dealer }
});