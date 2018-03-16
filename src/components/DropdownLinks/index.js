import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const DropdownLinks = ({isVisible, close}) => {
    return isVisible ? (
        <div>
            <div className="dropdown-mask" onClick={close}/>
            <div className="dropdown-links">
                <Link className="dropdown-link" onClick={close} to="/painting">painting</Link>
                <Link className="dropdown-link" onClick={close} to="/graphics">graphics</Link>
                <Link className="dropdown-link" onClick={close} to="/socialmedia">social media</Link>
                <Link className="dropdown-link" onClick={close} to="/photography">photography</Link>
                <Link className="dropdown-link" onClick={close} to="/contact">contact</Link>
                <Link className="dropdown-link" onClick={close} to="/about">about</Link>
            </div>
        </div>
    ) : null
}

export default DropdownLinks