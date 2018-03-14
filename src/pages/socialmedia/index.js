import React from 'react'
import Img from 'gatsby-image'

import './index.css'

const SocialPage = ({ data }) => {
    console.log(data)
    const items = data.allFile.edges.map(item => {
        return {
            sizes: item.node.childImageSharp.sizes,
            name: item.node.name
        }
    })
    console.log(items)
    
    return (
        <div className="portfolio-list">
            {items.map(picture => <Img className="portfolio-item" sizes={items.sizes} />)}
        </div>
    )
}

export default SocialPage

export const query = graphql`
query SocialQuery {
    allFile(filter: {
        extension: {eq: "jpg"},
        absolutePath: {regex: "/(socialmedia)/"}}) {
      edges {
        node {
          id
          childImageSharp {
            sizes (maxWidth: 640) {
                ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
  `
