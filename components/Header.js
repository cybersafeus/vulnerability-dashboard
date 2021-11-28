import styles from '../styles/Header.module.css'
import NavBar from './Navbar'
import Sidebar from '../components/Sidebar'


export default function Header() {
  return (
    <div className={styles.sticky}>
      <NavBar />     
    </div>
  )
}