import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
     cache: 'no-store' 
  })


  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map(item => (

        <Link href="/blog/testID" className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image 
            src="/ovelha.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.body}</p>
        </div>

        </Link>  
      ))}
      

    </div>

  )
}

export default Blog