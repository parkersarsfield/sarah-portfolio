import React from 'react'
import Img from 'gatsby-image'

import './index.css'

const PhotoPage = ({ data }) => {
    const pictures = data.allFile.edges.map(pic => {
        return {
            sizes: pic.node.childImageSharp.sizes,
            name: pic.node.name
        }
    })
    
    return (
        <div>
        <div className="portfolio-title">photography</div>

        <div className="portfolio-list">
            {pictures.map(picture => <Img className="portfolio-item" sizes={picture.sizes} />)}
        </div>
        </div>
    )
}

export default PhotoPage

export const query = graphql`
query PhotoQuery {
    allFile(filter: {
        extension: {eq: "jpg"},
        absolutePath: {regex: "/(photography)/"}}) {
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
