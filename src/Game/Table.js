import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Hand from './Hand';
import Interface from "./Interface";
import Outcome from './Outcome'
import { initializeDeck, addCard, addCardDealer, playerStopped, initializePlayer, initializeDealer } from './actions';

import "./Table.css";

const Table = ({ 
        player,
        dealer,
        deck, 
        setDeckOnLoad, 
        hitMeAgain, 
        hitDealerAgain, 
        stopPlaying,
        setPlayerOnLoad,
        setDealerOnLoad
    }) => {

    useEffect(() => {
        setDeckOnLoad();
        setPlayerOnLoad();
        setDealerOnLoad();
        console.log(dealer, player)
    }, []);

    return(
        <div>
            <div className="dealerCards">
                <Hand dealer={dealer} player={false}/>
            </div>
            {/* Contains score logic */}
            <Outcome dealer={dealer} player={player}/>
            {/* Contains the buttons */}
            <Interface 
                deck={deck} 
                hitMeAgain={hitMeAgain} 
                hitDealerAgain={hitDealerAgain}
                stopPlaying={stopPlaying}
                player={player}
                dealer={dealer}
            />
            <div className="playerCards">
                <Hand dealer={false} player={player}/>
            </div>
        </div>
)};

const mapStateToProps = state => ({
    deck: state.deck,
    dealer: state.dealer,
    player: state.player
});

const mapDispatchToProps = dispatch => ({
    setDeckOnLoad: () => dispatch(initializeDeck()),
    setPlayerOnLoad: () => dispatch(initializePlayer()),
    setDealerOnLoad: () => dispatch(initializeDealer()),
    hitMeAgain: (deck, player) => dispatch(addCard(deck, player)),
    hitDealerAgain: (deck, dealer) => dispatch(addCardDealer(deck, dealer)),
    stopPlaying: () => dispatch(playerStopped())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);