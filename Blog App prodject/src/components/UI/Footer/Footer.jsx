import React from 'react';
import { BsFacebook }  from 'react-icons/bs';
import {AiFillTwitterCircle, AiOutlineMail, AiFillInstagram} from 'react-icons/ai';
import './Footer.css'

const Footer = (props) => {
    return (
        <div className='Footer' style={props.darkMode ? {color: '#c21858'} : null}>
            <div className='info'>
                <div  className='infoItems'>
                    <BsFacebook className='icon Facebook'/>
                     <a href="http://www.Facebook.com/master.yagi">Facebook</a> 
                </div>
               <div className='infoItems'>
               <AiFillTwitterCircle className='icon twitter' />
                   <a href="https://twitter.com/Ozoh17">Twitter</a> 
               </div>
                <div className='infoItems'>
                    <AiFillInstagram className='icon instagram'/>
                    <a href="http://www.instagram.com/herosdesign59">Instagram</a>
                </div>
                <div className='infoItems'>
                    <AiOutlineMail className='icon email'/>
                    
                    <a href="http://ozohefe@gmail.com">email</a>
                </div>
                 
            </div>
            <div className='copywrite'>
                <b>OzohEfe Copywrite©{new Date().getFullYear()}</b>
            </div>
        </div>
    )
}

export default Footer;