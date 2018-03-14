import React from 'react'
import logo from '../../media/sign.svg'
import Link from 'gatsby-link'

import './index.css'

const Header = () => {
    return (
        <div className="header">
        <Link to="/">
            <img src={logo} className="header-signature" draggable="false"/>
        </Link>
        </div>
    )
}

export default Header
