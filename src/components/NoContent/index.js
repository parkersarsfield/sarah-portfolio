import React from 'react'
import Link from 'gatsby-link'

const NoContent = () => (
    <div className="no-content-message">
        There is no content available here yet! Check back later or <Link to="/about">learn more.</Link>
    </div>
)

export default NoContent
