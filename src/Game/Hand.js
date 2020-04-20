import React from 'react'
import Card from './Card'

const Hand = ({playerCards}) => (
    <div>
        {playerCards.map(card => 
            <div>{card.value} - {card.suit}</div>
        )}
    </div>
);

export default Hand;