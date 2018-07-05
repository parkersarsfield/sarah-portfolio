import React from 'react'
import Img from 'gatsby-image'

import './index.css'
const PortfolioList = ({ title, items }) => {
  return (
    <div>
      <div className="portfolio-title">{title}</div>
      <div className="portfolio-list">
        {items.map(
          (item, i) =>
            i !== items.length - 1 ? (
              <Img
                className="portfolio-item"
                sizes={item.sizes}
                key={item.id}
              />
            ) : (
              <Img
                className="portfolio-item-last"
                sizes={item.sizes}
                key={item.id}
              />
            )
        )}
      </div>
    </div>
  )
}

export default PortfolioList
