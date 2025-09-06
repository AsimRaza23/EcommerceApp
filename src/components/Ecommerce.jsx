import React, { useEffect, useState } from 'react'
import style from './Ecommerce.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
// import About from '../pages/About.jsx'

const Ecommerce = () => {

 

  return (
    <div >
      <div className={style.navbarContainer}>
        
          <h1 className={style.h1}>AR LAPTOP STORE</h1>
          
        <ul className={style.navbar}>
          <li><Link className={style.link} to="/">HOME</Link></li>
          <li><Link className={style.link} to="/About">ABOUT US</Link></li>
          <li><Link className={style.link} to='/contact'>CONTACT US</Link></li>
          <li>SHOP LOCATION</li>
        </ul>
      </div>

      
      
    </div>
  )
}

export default Ecommerce
