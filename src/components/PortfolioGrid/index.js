import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import './index.css'

const PortfolioGrid = ({ title, items, categorySlug }) => {
  return (
    <div>
      <div className="portfolio-title">{title}</div>
      <div className="portfolio-grid">
        {items.map(item => {
          return (
            <div className="portfolio-grid-item" key={item.slug}>
              <Link to={categorySlug + item.slug}>
                <Img sizes={item.thumbnailSizes} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PortfolioGrid
