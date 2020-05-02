import React from 'react';
import _ from 'lodash';
import Card from './Card';
import './Hand.css';

const Hand = ({ dealer, player }) => {
    {/* As a Hand can be for the player OR dealer, a check is required to return the right data */}

    console.log(dealer)

    return(
        <div>
            { 
                player ?
                <div className="deckContainer" key="playerCards">
                    <h2>My hand: {player.total}</h2>
                    { _.size(player.hand) > 0 ?
                        player.hand.map(card => 
                            <Card card={card} key={card.value+""+card.suit}/>
                        )
                    : null
                    }
                </div>
                : dealer ?
                    <div className="deckContainer" key="dealerCards">
                        <h2>Dealer's hand: {dealer.total}</h2>
                        { _.size(dealer.hand) > 0 ?
                            dealer.hand.map((card, index) => {
                                // Hide the 2nd card of the dealer
                                if(dealer.isPlaying === false && index === 1){
                                    return <Card card={card} key={card.value+""+card.suit} hidden={true}/>
                                } else { 
                                    return <Card card={card} key={card.value+""+card.suit} hidden={false}/>
                                }
                            })
                        : null
                        }
                    </div>     
                : null
            }
        </div>
    )
}

export default Hand;