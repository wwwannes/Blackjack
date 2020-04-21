import React from 'react'
import Card from './Card'
import './Hand.css'

const Hand = ({ playerCards }) => {
    return(
        <div className="deckContainer">
            <h2>My hand:</h2>
            {playerCards.map(card => 
                <div className="card">
                    <img width="128" alt={card.value+""+card.suit} src={"./images/cards/"+card.value+""+card.suit+".png"}></img>
                </div>
            )}
        </div>
    )
}

export default Hand;