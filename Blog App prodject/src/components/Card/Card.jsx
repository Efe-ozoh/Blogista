import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = props => {

   
        
      return ( 
      <Link className='Card'
            to={`/full-post/${props.id}`}>
            <h3>{props.title}</h3>  
            <p>{props.content.slice(0, 150) + '...'}</p>
        </Link>
        
    )
}



export default Card;