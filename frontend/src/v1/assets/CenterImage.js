import React from 'react'
import Styles from './CenterImage.module.css';
import logo from '../../assets/profilePhoto.png';
const CenterImage = () => {
  return (
    <div className={Styles.container}>
                <img className={Styles.image} src={logo} alt='me'/>
              </div>
  )
}

export default CenterImage;