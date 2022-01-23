import { signOut } from 'next-auth/react'
import { FaBars } from "react-icons/fa";
import { RiLogoutBoxRLine } from 'react-icons/ri';
import styles from '../styles/Sidebar.module.css'
import { SideBarData } from './NavigationData'
import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip';
export default function Sidebar({ children, toglleSideBar, sideBar }) {

    return (
        <div className={`${styles['side-bar']} ${sideBar ? styles['side-bar-active'] : styles['side-bar-inactive']}`}>
            <div>
                <FaBars className={styles.btn} onClick={toglleSideBar} />
            </div>
            <ul className={styles['nav-list']}>
                {SideBarData.map((item, index) => {
                    return <Tooltip key={item.title}  title = {!sideBar ? item.title: ''} placement='right-start'>
                        <li key={item.title}>
                            <Link href={item.path}>
                                <div className={styles.links}>
                                    <i>{item.icon}</i>
                                    <span className={item.cName}>{item.title}</span>
                                </div>
                            </Link>
                        </li>
                    </Tooltip>
                })}
            </ul>
            <div className={styles['profile-content']}>
                <div className={styles.profile}>
                    <div className={styles['profile-details']}>
                        <img src="/arun_raju.png" alt=" " id="profile-pic" />
                        <div className={styles['personal-detail']}>
                            <div className={styles.name}>Arun Raju</div>
                            <div className={styles.email}>arun@cybersafus.com</div>
                            <RiLogoutBoxRLine className={styles.logout} onClick={() => signOut()} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
