import React, { useState } from "react";
import {FiMenu} from 'react-icons/fi';
import { Link } from "react-router-dom";


import logoImg from '../../../assets/images/Blog-logo.png';
import './Header.css'

const Header = () => {
 
   const [menuClass, setMenuClass] = useState(false)

   const dropDownMenuClass = () => {
      // const event  = event.preventDefault()
      setMenuClass(!menuClass)
   };




   return (
       
       <nav className='Header'>
        <div className='HeaderContent'>
           {/* NavLogo  */}
           <div className='HeaderLogo'>
            <img src={logoImg} alt=''/>
            <h2>Blogista</h2> 
          </div> 

             {/* Nav links */}
        <div className={menuClass ? 'MobileHeaderList' : 'HeaderList'}>
           <Link to='/' 
           className='NavLink' onClick={menuClass ? dropDownMenuClass : null}>Home</Link>
           <Link to='/add-post' 
           className='NavLink' onClick={menuClass ? dropDownMenuClass : null}>Compose</Link>
        </div>

        {/* Menu logo */}
        <div className='Menu'>
        <FiMenu onClick={dropDownMenuClass} className='Menu'/>
        </div>
        {/* Menu logo */}
      </div>
    </nav>
    
   )
};

export default Header;