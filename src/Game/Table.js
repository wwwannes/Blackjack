import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Hand from './Hand';
import Interface from "./Interface";
import Outcome from './Outcome'
import { initializeDeck, addCard, addCardDealer, playerStopped } from './actions';

import "./Table.css";

const Table = ({ 
        isPlaying = true, 
        deck = [], 
        playerCards = [], 
        dealerCards = [], 
        setDeckOnLoad, 
        hitMeAgain, 
        hitDealerAgain, 
        stopPlaying 
    }) => {
    useEffect(() => {
        setDeckOnLoad();
    }, []);

    return(
        <div>
            <div className="dealerCards">
                <Hand dealerCards={dealerCards} total={null} isPlaying={isPlaying}/>
            </div>
            {/* Contains score logic */}
            <Outcome playerCards={playerCards} dealerCards={dealerCards}/>
            {/* Contains the buttons */}
            <Interface 
                isPlaying={isPlaying} 
                deck={deck} 
                playerCards={playerCards} 
                dealerCards={dealerCards} 
                hitMeAgain={hitMeAgain} 
                hitDealerAgain={hitDealerAgain}
                stopPlaying={stopPlaying}
            />
            <div className="playerCards">
                <Hand playerCards={playerCards} total={null}/>
            </div>
        </div>
)};

const mapStateToProps = state => ({
    isPlaying: state.isPlaying,
    deck: state.deck,
    playerCards: state.playerCards,
    dealerCards: state.dealerCards
});

const mapDispatchToProps = dispatch => ({
    setDeckOnLoad: () => dispatch(initializeDeck()),
    hitMeAgain: (deck, playerCards) => dispatch(addCard(deck, playerCards)),
    hitDealerAgain: (deck, dealerCards) => dispatch(addCardDealer(deck, dealerCards)),
    stopPlaying: () => dispatch(playerStopped())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);