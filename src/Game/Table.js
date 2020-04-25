import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Hand from './Hand';
import Interface from "./Interface";
import Outcome from './Outcome'
import { initializeDeck, addCard, addCardDealer } from './actions';

import "./Table.css";

const Table = ({ deck = [], playerCards = [], dealerCards = [], setDeckOnLoad, hitMeAgain, hitDealerAgain }) => {
    useEffect(() => {
        setDeckOnLoad();
    }, []);

    return(
        <div>
            {/* Contains score logic */}
            <Outcome playerCards={playerCards} dealerCards={dealerCards}/>

            <div className="dealerCards">
                <Hand dealerCards={dealerCards}/>
            </div>
            <div className="playerCards">
                <Hand playerCards={playerCards}/>
            </div>

            {/* Contains the buttons */}
            <Interface deck={deck} playerCards={playerCards} dealerCards={dealerCards} hitMeAgain={hitMeAgain} hitDealerAgain={hitDealerAgain}/>
        </div>
)};

const mapStateToProps = state => ({
    deck: state.deck,
    playerCards: state.playerCards,
    dealerCards: state.dealerCards
});

const mapDispatchToProps = dispatch => ({
    setDeckOnLoad: () => dispatch(initializeDeck()),
    hitMeAgain: (deck, playerCards) => dispatch(addCard(deck, playerCards)),
    hitDealerAgain: (deck, dealerCards) => dispatch(addCardDealer(deck, dealerCards)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);