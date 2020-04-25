import React from 'react'

const Deck = ({ deck }) => {
    const content = (
        <div className="container">
            {deck.map(card => 
                <div>{card.value} - {card.suit}</div>
            )}
        </div>
    )
    return content;
}

export default Deck;