import React from 'react'
import Styles from './CircularButton.module.css';
const CircularButton = (props) => {
  return (
    <div className={Styles.container}>
            <div className={Styles.text}>
              {props.name? props.name : 
              <img className={Styles.icon} src={props.link} alt = 'seek'/>} 
            </div>
    </div>
  )
}

export default CircularButton;