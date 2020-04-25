import React from 'react';
import _ from 'lodash';

const Outcome = ({ playerCards = [], dealerCards = [] }) => {

    let playerTotal = calculateTotal(playerCards);
    let dealerTotal = calculateTotal(dealerCards);

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
            <h2>Dealer Total: {dealerTotal}</h2>
            {
                playerTotal > 21 ? <h1>Busted</h1> 
                : _.size(playerCards) === 2 && playerTotal === 21 ? <h1>Blackjack!!</h1>
                : playerTotal === 21 ? <h1>You won.</h1>
                : null
            }
        </div>
    )
}

export default Outcome;