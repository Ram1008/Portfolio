import React from 'react';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/myLogo.png';
import Button from './Button';
import Styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
                <Link to='/v1/'><img className={Styles.logo} src = {MyLogo} alt = 'logo'/></Link>
                <Link to='/v1/connect' className={Styles.buttonWrapper}>
                  <Button name = {"Let's connect"}/>
                  </Link>
            </nav>
  )
}

export default Navbar;