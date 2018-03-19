import React from 'react'
import logo from '../../media/sign.svg'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './index.css'

const Header = ({signatureSizes}) => {
    return (
        <div className="header">
        <Link to="/">
            <Img className="header-signature" sizes={signatureSizes} />
        </Link>
        </div>
    )
}

export default Header
