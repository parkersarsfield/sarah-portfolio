import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const LinkButton = ({text}) => {
    return (
        <Link className="link-button" to={text.split(' ').join('')}>
            <div className="link-text">{text}</div>
        </Link> 
    )
}

const PageLinks = ({links}) => {
    return (
        <div className="link-group">
            {links.map(link => {
                return <LinkButton text={link} />
            })}
        </div>
    )
}

export default PageLinks
