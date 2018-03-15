import React from 'react'
import logo from '../../media/sign.svg'
import Link from 'gatsby-link'
import PageLinks from '../PageLinks'

import './index.css'
const links = ['painting', 'graphics', 'social media', 'photography']

const DetailedHeader = () => {
    return (
        <div className="header detailed">

            <PageLinks links={links} hasLogo />
        </div>
    )
}

export default DetailedHeader
