import React from 'react'
import styles from '../components/Navbar.module.css'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    
    <nav className={styles.navbar}>
      <div className='brand'>Routing-Practice</div>
      <ul className={styles.NavLinks}>
        <li className={styles.navitems}><NavLink to='/'>Home</NavLink></li>
        <li className={styles.navitems}><NavLink to='/About'>About</NavLink></li>
        <li className={styles.navitems}><NavLink to='/Contact'>Contact</NavLink></li>
        <li className={styles.navitems}><NavLink to='/Features'>Features</NavLink></li>
        <li className={styles.navitems}><NavLink to='/Pricing'>Pricing</NavLink></li>
        <li className={styles.navitems}><NavLink to='/Services'>Services</NavLink></li>
        <li className={styles.navitems}><NavLink to='/Services'>Services</NavLink></li>
        <li className={styles.navitems}><NavLink to='/Services'>Services</NavLink></li>
        <li className={styles.navitems}><NavLink to='/Services'>Services</NavLink></li>
        <li className={styles.navitems}><NavLink to='/Services'>Services</NavLink></li>
     
      </ul>
<button className={styles.btn}>Get Started</button>
    </nav>
  )
}

export default Navbar
