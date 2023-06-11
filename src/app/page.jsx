import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/ovelha.jpg';
import Button from '@/components/Button/Button';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Title of website</h1>
        <p className={styles.description}>text under the title of the website</p>
        <Button url="/" text="Ver Mais">See more</Button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />

      </div>


    </div>
  )
}
