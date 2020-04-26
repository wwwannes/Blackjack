import React from 'react';
import _ from 'lodash';

const Outcome = ({ player, dealer }) => {
    return(
        <div>
            {
                player.total > 21 ? <h1>Busted</h1> 
                : _.size(player.hand) === 2 && player.total === 21 ? <h1>Blackjack!!</h1>
                : player.total === 21 ? <h1>You won.</h1>
                : null
            }
        </div>
    )
}

export default Outcome;