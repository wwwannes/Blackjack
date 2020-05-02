import React from 'react';
import _ from 'lodash';

const Outcome = ({ player, dealer }) => {
    return(
        <div className="text-center">
            {
                player.total > 21 ? <h1>Busted.</h1> 
                : _.size(player.hand) === 2 && player.total === 21 ? <h1>Blackjack!!</h1>
                : player.total === 21 && dealer.total === 21 ? <h1>Dealer won.</h1>
                : player.total === 21 ? <h1>You won.</h1>
                : dealer.total > 21 ? <h1>Dealer busted.</h1> 
                : null
            }
        </div>
    )
}

export default Outcome;