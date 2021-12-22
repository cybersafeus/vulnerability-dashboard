import {useState} from 'react'
import Link from 'next/Link'
import styles from '../styles/Navbar.module.css'
import { NavBarData } from './NavigationData'


export default function NavBar() {
  const [showMenu, setShowMenu] = useState(true);

  const onClickMenu = () =>{
    setShowMenu(!showMenu);
  } 
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/#">
        <img src="/logo.png" className={styles.logo}></img>
        </Link>
        <nav>
          <ul className ={showMenu ? styles['menu-list'] : styles['menu-list-active']}>
         { NavBarData.map((item,index) => 
             (<li key = {item.title} className={styles['nav-item']}><Link href={item.path}>{item.title}</Link></li>)
          )}
          </ul>
        </nav>
        <img src="/menu.png" className={styles['menu-icon']} onClick = {onClickMenu}></img>
      </div>
    </div>

  )
}