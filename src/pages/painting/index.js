import React from 'react'
import Img from 'gatsby-image'

import NoContent from '../../components/NoContent'

const PaintingPage = ({ data }) => {
  const items =
    data.allFile === null
      ? []
      : data.allFile.edges.map(item => {
          return {
            sizes: item.node.childImageSharp.sizes,
            id: item.node.id
          }
        })

  return (
    <div>
      <div className="portfolio-title">paintings</div>
      <div className="portfolio-list">
        {items.length === 0 ? (
          <NoContent />
        ) : (
          items.map(item => (
            <Img className="portfolio-item" sizes={item.sizes} key={item.id} />
          ))
        )}
      </div>
    </div>
  )
}

export default PaintingPage

export const query = graphql`
  query PaintingQuery {
    allFile(
      filter: {
        extension: { eq: "jpg" }
        absolutePath: { regex: "/(paintings)/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 640) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
