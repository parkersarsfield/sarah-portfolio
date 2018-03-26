import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const DropdownLinks = ({isVisible, close}) => {
    const maskClass = isVisible ? `dropdown-mask` : `dropdown-mask-hidden`
    const linksClass = isVisible ? `dropdown-links` : `dropdown-links-hidden`

    return (
        <div>
            <div className={maskClass} onClick={close}/>
            <div className={linksClass}>
                <Link className="dropdown-link" onClick={close} to="/painting">painting</Link>
                <Link className="dropdown-link" onClick={close} to="/poetry">poetry</Link>
                <Link className="dropdown-link" onClick={close} to="/socialmedia">social media</Link>
                <Link className="dropdown-link" onClick={close} to="/photography">photography</Link>
                <Link className="dropdown-link" onClick={close} to="/contact">contact</Link>
                <Link className="dropdown-link" onClick={close} to="/about">about</Link>
            </div>
        </div>
    )
}

export default DropdownLinks