import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as bodyTypes from '../../../store/actions/body';
import './DarkMode.css';

const DarkMode = (props) => {
   
    const [checked, setChecked] = useState(false);

    const inputClicked = (event) => {
        // const targetchecked = event.target.checked;

        if(checked){
            props.darkMode(false)
            setChecked(false)
        }else{
            props.darkMode(true)
            setChecked(true)
        }
    }

    return  (
    <div>
        <input type="checkbox" checked={checked} className="toggle"  id="check" onChange={inputClicked}/>
        <label checked={checked} htmlFor="check" text=""></label>
    </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        darkMode: (data) => dispatch(bodyTypes.darkMode(data))
    }
};


export default connect(null, mapDispatchToProps)(DarkMode);