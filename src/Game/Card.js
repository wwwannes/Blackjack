import React from 'react'

const Card = ({ card }) => (
    <div className="card" key={card.value+""+card.suit}>
        <img width="128" alt={card.value+""+card.suit} src={"./images/cards/"+card.value+""+card.suit+".png"}></img>
    </div>
)

export default Card;