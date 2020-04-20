import React from 'react';

const Interface = ({ deck, hitMeAgain,takeCardFromDeck, playerCards }) => {

    return(
        <div>
            <h2>Deck</h2>
            {deck.map(card => 
                <div>{card.value} - {card.suit}</div>
            )}
            {/*<button onClick={() => shuffleDeck(deck)}>Shuffle</button>*/}
            <button onClick={() => 
                hitMeAgain(deck, playerCards)
            }>Hit me!</button>
        </div>
    );
}

export default Interface;