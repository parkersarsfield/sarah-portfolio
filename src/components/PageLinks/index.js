import React, {Fragment} from 'react'

import Link from 'gatsby-link'
import logo from '../../media/sign.svg'
import './index.css'

const LinkButton = ({ text }) => {
    return (
        <Link className="link-button" to={text.split(' ').join('')}>
            <div className="link-text">{text}</div>
        </Link>
    )
}

const PageLinks = ({ links, hasLogo }) => {
    return (
        <div className="link-group">
            {links.map((link, i) => {
                if (i === 2 && hasLogo) {
                    return [
                            <Link to="/">
                                <img src={logo} className="header-signature" draggable="false" />
                            </Link>,
                            <LinkButton text={link} />
                    ]
                } else {
                    return <LinkButton text={link} />
                }
            })}
        </div>
    )
}

export default PageLinks
