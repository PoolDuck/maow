import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div> ©2023 maow. All Rights Reserved </div>
      <div className={styles.social}>
        <Image src="/instagram.png" className={styles.icon} alt="" width={20} height={20}/>
        <Image src="/facebook.png" className={styles.icon} alt="" width={20} height={20}/>


      </div>
    </div>
  )
}

export default Footer