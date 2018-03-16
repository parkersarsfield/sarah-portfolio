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
        <div className="footer-container">
            <div className="footer">
                <Link className="footer_link" to='/contact'>contact</Link>
                <a className="footer_link" href={instagramUrl}><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                <Link className="footer_link" to='/about'>about</Link>
            </div>
            <div className="legal">
                All images and content property of Sarah Borton.
            </div>
        </div>
    )
}

export default Footer