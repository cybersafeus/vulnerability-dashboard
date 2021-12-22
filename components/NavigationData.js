import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

const SideBarData = [
    // {
    //     title: 'Dashboard',
    //     path: '/dashboard',
    //     icon: <AiIcons.AiOutlineDashboard/>,
    //     cName: 'links-name'
    // },
    {
        title: 'Products',
        path: '/products',
        icon: <MdIcons.MdLaptopMac/>,
        cName: 'links-name'
    },
    {
        title: 'Vulnerabilities',
        path: '/vulnerabilities',
        icon: <BiIcons.BiErrorCircle/>,
        cName: 'links-name'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome/>,
        cName: 'links-name'
    },    
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <FaIcons.FaBell/>,
        cName: 'links-name'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FiIcons.FiSettings/>,
        cName: 'links-name'
    }
]

const NavBarData = [
    {
        title: 'Platform',
        path: '/public/platform',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-item'
    },
    {
        title: 'Pricing',
        path: '/public/pricing',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-item'
    },
    {
        title: 'What We Do',
        path: '/public/whatwedo',
        icon: <FaIcons.FaBell/>,
        cName: 'nav-item'
    },
    {
        title: 'Resources',
        path: '/public/resources',
        icon: <FaIcons.FaCat/>,
        cName: 'nav-item'
    },
    {
        title: 'Company',
        path: '/public/company',
        icon: <FaIcons.FaIdCard/>,
        cName: 'nav-item'
    }
]

module.exports = {
    SideBarData,
    NavBarData
}