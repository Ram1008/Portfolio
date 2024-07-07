import React from 'react';
import Styles from './Button.module.css';
const Button = (props) => {
  return (
    <button className={Styles.button} onClick={props.click} type={props.type? props.type: ""}>
       {props.name} 
    </button>
  )
}

export default Button;