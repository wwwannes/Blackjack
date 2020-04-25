import React from 'react'

const Card = ({ card, hidden }) => (
    <div className="card" key={card.value+""+card.suit}>
        { hidden ?
        <img width="128" alt="back" src="./images/cards/back.png"/>
        : <img width="128" alt={card.value+""+card.suit} src={"./images/cards/"+card.value+""+card.suit+".png"}/>
        }
    </div>
)

export default Card;