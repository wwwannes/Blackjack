import React from 'react';
import _ from 'lodash';

const Interface = ({ deck, hitMeAgain, hitDealerAgain, stopPlaying, player, dealer }) => {

    function startGame(){
        hitMeAgain(deck, player.hand);
        hitDealerAgain(deck, dealer.hand);
        hitMeAgain(deck, player.hand);
        hitDealerAgain(deck, dealer.hand);
    }
    
    return(
        <div style={{textAlign: 'center'}}>
            {
            _.size(player.hand) === 0 && _.size(dealer.hand) === 0 ? 
                <button onClick={() => 
                    startGame()
                }>Start game</button>
                : null
            }
            { 
            player.isPlaying && _.size(player.hand) > 0 && _.size(dealer.hand) > 0 ?
                <div>
                    <button onClick={() => 
                        hitMeAgain(deck, player.hand)
                    }>Hit me!</button>
                    <button onClick={() => 
                        stopPlaying()
                    }>Stay</button>
                </div>
            : null
            }
            { 
            !player.isPlaying && _.size(player.hand) > 0 && _.size(dealer.hand) > 0 ?
                <button onClick={() => 
                    hitDealerAgain(deck, dealer.hand)
                }>Hit Dealer!</button>
                : null
            }
        </div>
    );
}

export default Interface;