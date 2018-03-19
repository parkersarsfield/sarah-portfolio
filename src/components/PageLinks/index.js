import React, {Fragment} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

import Link from 'gatsby-link'
import Img from 'gatsby-image'
import './index.css'

const LinkButton = ({ text }) => {
    return (
        <Link className="link-button" to={text.split(' ').join('')}>
            <div className="link-text">{text}</div>
        </Link>
    )
}

const PageLinks = ({ links, hasLogo, openMenu, signatureSizes }) => {
    return (
        <div className="link-group">
            {links.map((link, i) => {
                if (i === 2 && hasLogo) {
                    return [
                            <Link className="signature-container" to="/">
                                <Img sizes={signatureSizes} />
                            </Link>,
                            <LinkButton text={link} />
                    ]
                } else {
                    return <LinkButton text={link} />
                }
            })}
            <FontAwesomeIcon className="menu-button" icon={faBars} onClick={openMenu}/>

        </div>
    )
}

export default PageLinks
