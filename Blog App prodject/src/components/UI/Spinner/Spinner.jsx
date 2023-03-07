import React from 'react';

import './Spinner.css'

const Spinner = props => {
    return (
        <div className='Spinner'>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
        <h4 className='Children'>{props.children}</h4>
        </div>
    )
}

export default Spinner;