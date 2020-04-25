import React from 'react'
import Card from './Card'
import './Hand.css'

const Hand = ({ playerCards, dealerCards }) => {
    {/* As a Hand can be for the player OR dealer, a check is required to return the right data */}

    return(
        <div>
            { 
                playerCards !== undefined ?
                <div className="deckContainer" key="playerCards">
                    <h2>My hand:</h2>
                    {playerCards.map(card => 
                        <Card card={card} key={card.value+""+card.suit}/>
                    )}
                </div>
                : dealerCards !== undefined ?
                    <div className="deckContainer" key="dealerCards">
                        <h2>Dealer's hand:</h2>
                        {dealerCards.map(card => 
                            <Card card={card} key={card.value+""+card.suit}/>
                        )}
                    </div>     
                : null
            }
        </div>
    )
}

export default Hand;