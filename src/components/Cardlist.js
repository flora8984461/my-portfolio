import React from 'react';
import {Card} from './Card.js';
import './css/card-list.styles.css';

export const CardList = (props) => {

    return (
     <div className='card-list'>
    
      {props.monsters.map(monster => (<Card key={monster.id} monster={monster} /> ) )}

     </div>
     )
  
}