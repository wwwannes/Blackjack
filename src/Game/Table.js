import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Deck from './Deck';
import Hand from './Hand';
import Interface from "./Interface";
import Outcome from './Outcome'
import { initializeDeck, shuffleDeck, addCard, removeCard } from './actions';

const Table = ({deck = [], playerCards = [], dealerCards = [], setDeckOnLoad, setRandomDeck, hitMeAgain, takeCardFromDeck}) => {
    useEffect(() => {
        setDeckOnLoad();
    }, []);

    return(<div>
        {/*<Deck deck={deck}/>*/}
        <Hand playerCards={playerCards}/>
        <Interface deck={deck} hitMeAgain={hitMeAgain} takeCardFromDeck={takeCardFromDeck} playerCards={playerCards}/>
        {/*<Outcome/>*/}
    </div>);
};

const mapStateToProps = state => ({
    deck: state.deck,
    playerCards: state.playerCards,
    dealerCards: state.dealerCards
});

const mapDispatchToProps = dispatch => (
    {
        setDeckOnLoad: () => dispatch(initializeDeck()),
        setRandomDeck: cards => dispatch(shuffleDeck(cards)),
        hitMeAgain: (deck, playerCards) => dispatch(addCard(deck, playerCards)),
        takeCardFromDeck: deck => dispatch(removeCard(deck))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Table);