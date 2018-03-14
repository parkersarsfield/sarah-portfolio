import React from 'react'
import Link from 'gatsby-link'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

import './index.css'

fontawesome.library.add(brands)


const instagramUrl = 'https://www.instagram.com/saraheborton/'
const Footer = () => {
    return (
        <div className="footer">
            <Link className="footer_link" to='/contact'>contact</Link>
            <Link className="footer_link" to='/contact'>about</Link>
            <a className="footer_link" href={instagramUrl}><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
        </div>
    )
}

export default Footer