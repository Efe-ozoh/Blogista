import React from 'react';
import { connect } from 'react-redux';

import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
import './Layout.css'
import Modal from '../../UI/Modal/Modal'

const Layout = props => {
    return (
        <div className={props.darkMode ? 'DarkMode' : 'Layout' }>
            <Header darkMode={props.darkMode} />
            <Modal/>
          {props.children} 
            <Footer darkMode={props.darkMode}/> 
        </div>
    ) 
};


const mapStateToProps = state => {
    return {
        darkMode: state.body.darkMode,
    }
};



export default connect(mapStateToProps, null)(Layout);