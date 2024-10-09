import React from 'react'
import Button from './Button';
import Styles from './Modal.module.css';
const Modal = (props) => {
    const handleClose = () =>{
        props.setShowModal(false);
    }
  return (
    <div className={Styles.container}>
            <div className={Styles.title}>{props.title}</div>
            <div className={Styles.description}>{props.description}</div>
            <div style={{margin: "1rem auto"}}><Button click = {handleClose} name="Close ✘" /></div>
        
    </div>
  )
}

export default Modal;