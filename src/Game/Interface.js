import React from 'react';
import _ from 'lodash';

const Interface = ({ isPlaying, deck, playerCards = [], dealerCards = [], hitMeAgain, hitDealerAgain, stopPlaying }) => {

    function startGame(){
        hitMeAgain(deck, playerCards);
        hitDealerAgain(deck, dealerCards);
        hitMeAgain(deck, playerCards);
        hitDealerAgain(deck, dealerCards);
    }
    
    return(
        <div>
            {
            _.size(playerCards) === 0 && _.size(dealerCards) === 0 ? 
                <button onClick={() => 
                    startGame()
                }>Start game</button>
                : null
            }
            { 
            isPlaying && _.size(playerCards) > 0 && _.size(dealerCards) > 0 ?
                <div>
                    <button onClick={() => 
                        hitMeAgain(deck, playerCards)
                    }>Hit me!</button>
                    <button onClick={() => 
                        stopPlaying()
                    }>Stay</button>
                </div>
            : null
            }
            { 
            !isPlaying && _.size(playerCards) > 0 && _.size(dealerCards) > 0 ?
                <button onClick={() => 
                    hitDealerAgain(deck, dealerCards)
                }>Hit Dealer!</button>
                : null
            }


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