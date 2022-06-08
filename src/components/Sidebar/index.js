import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={LogoS} alt='logo' />
            <img src={LogoSubtitle} alt='slobodan' />
        </Link>
    </div>
)

export default Sidebar