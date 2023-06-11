import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="/public/ratings.png"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Titulo principal</h1>
          <h2 className={styles.imgDesc}>Subtitulo</h2>
        </div>
      </div>

    
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>description bla bla bla</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>description bla bla bla</p>
        </div>
      </div>
    

    </div>
  )
}

export default About