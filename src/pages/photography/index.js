import React from 'react'
import PortfolioList from '../../components/PortfolioList'

const PhotoPage = ({ data }) => {
  const items = data.allFile.edges.map(pic => {
    return {
      sizes: pic.node.childImageSharp.sizes,
      id: pic.node.id
    }
  })

  return <PortfolioList items={items} title="photography" />
}

export default PhotoPage

export const query = graphql`
  query PhotoQuery {
    allFile(
      filter: {
        extension: { eq: "jpg" }
        absolutePath: { regex: "/(photography)/" }
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
