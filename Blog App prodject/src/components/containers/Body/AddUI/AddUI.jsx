import React from 'react';
import { NavLink } from 'react-router-dom';

import './AddUI.css';

const AddUI = () => {

    return  (
        <div className='Add'>
         <NavLink className='Link' exact to='/add-post'><h1>+</h1></NavLink>
    </div>
    )
};

export default AddUI;