import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Contacts = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Keep in touch</div>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src="/contactsimg.png"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
          <form className={styles.form}>
            <input type="text" placeholder='name' className={styles.input}/>
            <input type="text" placeholder='email' className={styles.input}/>
            <textarea
              className={styles.textArea}
              placeholder='message'
              alt=""
              rows="10"
            />
          </form>
        </div>
    </div>
  )
}

export default Contacts