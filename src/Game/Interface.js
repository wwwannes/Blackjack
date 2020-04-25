import React from 'react';
import _ from 'lodash';

const Interface = ({ deck, playerCards = [], dealerCards = [], hitMeAgain, hitDealerAgain }) => {
    return(
        <div>
            <h2>Deck:</h2>
            {deck.map(card => 
                <div>{card.value} - {card.suit}</div>
            )}

            <button onClick={() => 
                 hitMeAgain(deck, playerCards)
            }>Hit me!</button>
            <button onClick={() => 
                hitMeAgain(deck, playerCards)
            }>Stay</button>
            <button onClick={() => 
                hitDealerAgain(deck, dealerCards)
            }>Hit Dealer!</button>


            {/*{
                playerTotal < 21 ?
                    <div>
                        <button onClick={() => 
                            hitMeAgain(deck, playerCards)
                        }>Hit me!</button>
                        <button onClick={() => 
                            hitMeAgain(deck, playerCards)
                        }>Stay</button>
                    </div>
                    : null
            }
            {
                dealerTotal < 21 ?
                    <button onClick={() => 
                        hitDealerAgain(deck, dealerCards)
                    }>Hit Dealer!</button>
                    : null
            }*/}
        </div>
    );
}

export default Interface;