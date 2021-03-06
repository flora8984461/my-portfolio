import React from 'react';
import  './css/card.styles.css';

export const Card = (props) => (
    <div className = 'card-container'>

        <img alt='monster' src = { `https://robohash.org/${props.monster.id}?set=set2&size=150x300` } />

        <h2> {props.monster.name} </h2>
        <h4> {props.monster.email} </h4>

    </div>
)
