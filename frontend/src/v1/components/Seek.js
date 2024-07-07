import React from 'react'
import Styles from './LetsConnectForm.module.css';
import CenterImage from '../assets/CenterImage';
const Seek = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.centerImage} >
              <CenterImage/>
      </div>
      <div className={Styles.tagLine}>
      This section is under construction.
      </div>
      <div className={Styles.tagLine}>
      Something exciting is yet to come!!
      </div>
    </div>
  )
}

export default Seek;