import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import * as bodyTypes from '../../../store/actions/body';
import './Modal.css'

const Modal = props => {
    // const [show, setShow] = useState(false);



    const showHandler = () => {
       props.clearError()      
    }



    return (
        <div  className='Modal'
        style={{transform: props.error ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.error ? '1': '0'}}>
        <h2 className='error' style={props.darkMode ? {color: 'gold'} : null}>{props.error}</h2>
            
            <Button clicked={showHandler} >Cancle</Button>
        </div>
    )
}

 const mapStateToProps = state => {
     return {
         error: state.body.error,
         darkMode: state.body.darkMode
     }

 }

 const mapDispatchToProps = dispatch => {
     return {
         clearError: (data) => dispatch(bodyTypes.clearError(data))
     }

 }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);