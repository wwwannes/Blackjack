import React from 'react'
import Card from './Card'

const Hand = ({ playerCards }) => {
    return(
        <div>
            <h2>Hand:</h2>
            {playerCards.map(card => 
                <div key={card.value + " - " + card.suit}>{card.value} - {card.suit}</div>
            )}
        </div>
    )
}

export default Hand;