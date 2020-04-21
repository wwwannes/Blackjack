import React from 'react';
import _ from 'lodash';

const Interface = ({ deck, playerCards = [], hitMeAgain }) => {

    let playerTotal = calculateTotal(playerCards);

    function calculateTotal(hand){
        let total = 0;

        if(_.size(hand) > 0){
            hand.forEach(card => {
                if(card.value === "J" || card.value === "Q" || card.value === "K"){
                    total += 10
                } else if(card.value === "A"){
                    if(total + 11 > 21){
                        total += 1;
                    } else {
                        total += 11;
                    }
                } else {
                    total += card.value
                }
            });
        }
        return total;
    }

    return(
        <div>
            <h2>Player Total: {playerTotal}</h2>
            {
                playerTotal > 21 ? <h1>Busted</h1> 
                : playerTotal == 21 ? <h1>You won!!!</h1>
                : null
            }
            <h2>Deck:</h2>
            {deck.map(card => 
                <div>{card.value} - {card.suit}</div>
            )}
            {/*<button onClick={() => shuffleDeck(deck)}>Shuffle</button>*/}
            <button onClick={() => 
                hitMeAgain(deck, playerCards, playerTotal)
            }>Hit me!</button>
        </div>
    );
}

export default Interface;