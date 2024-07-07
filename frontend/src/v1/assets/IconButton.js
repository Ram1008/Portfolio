import React from 'react';
import Styles from './IconButton.module.css';
import { Link } from 'react-router-dom';
const IconButton = (props) => {
  return (
        <Link to ={props.contact.link} target='_blank'><img className = {Styles.icon} src={props.contact.icon} alt='contact'/></Link>
  )
}

export default IconButton