import React from 'react'
import Img from 'gatsby-image'

import NoContent from '../../components/NoContent'

const PoetryPage = ({ data }) => {
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
      <div className="portfolio-title">poetry</div>
      <div className="portfolio-list poetry">
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

export default PoetryPage

export const query = graphql`
  query PoetryQuery {
    allFile(
      filter: {
        extension: { eq: "png" }
        absolutePath: { regex: "/(poetry)/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
