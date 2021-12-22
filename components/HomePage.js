import {signIn} from 'next-auth/react'
import styles from '../styles/HomePage.module.css'
import Button from '../components/Button'

export default function HomePage() {
  
  const buttonText = 'TRY NOW';
  return (
    <div className = {styles.container}>
      <div className={styles.row}>
        <div className={styles['col-1']}>
          <h1>CyberSafe - US</h1>
          <h2>No more Vulnerabilities</h2>
          <h3>Easy, User Friendly & Customized Notifications</h3>
          <p>Leave the Vulnerabilities in your product with US!!!</p>
          {/* <h4>$32.50</h4> */}
          <Button text={buttonText} onClick = {() =>signIn()}></Button>
        </div>
        <div className={styles['col-2']}>
          <img src="/vul_scan-1.png" alt="" className={styles['vul-img']} />
        </div>
      </div>
      
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.title}>Lorem ipsum dolor sit amet </div>
          <div className={styles.description}>
            Facere moluta eius laborum. Placeat enim iusto saepe totam 
          </div>
        </div>
      </div>
      <div className={styles.row}>
      <div className={styles['col-2']}>
          <img src="/vul_scan-bg4.jfif" alt="" className={styles['vul-img']} />
        </div>
        <div className={styles['col-1']}>
        <div className={styles.summary}>Lorem ipsum dolor sit amet </div>
          <div className={styles.description}>
            Facere moluta eius laborum. Placeat enim iusto saepe totam 
          </div>
        </div>
        
      </div>
      <div className={styles['social-links']}>
        <img src="/fb.png" alt="" />
        <img src="/tw.png" alt="" />
        <img src="/ig.png" alt="" />
      </div>
     

    </div>
  )
}
