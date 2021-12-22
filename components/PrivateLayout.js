import { useState } from 'react';
import styles from '../styles/PrivateLayout.module.css'
import Sidebar from './Sidebar'

export default function PrivateLayout({ children }) {
  const [sideBar, setSideBar] = useState(false);
  const toglleSideBar = () => {
      setSideBar(!sideBar)
  }
  return (    
    <div >
      <Sidebar toglleSideBar = {toglleSideBar} sideBar ={sideBar}/>
      <div className = {sideBar ? styles['container-active'] : styles.container}>
      {children}
      </div>
    </div>
  )
}