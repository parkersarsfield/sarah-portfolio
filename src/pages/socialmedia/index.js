import React from 'react'
import PortfolioList from '../../components/PortfolioList'

const formatImageObjects = data => {
  const items = data.edges.map(item => {
    return {
      sizes: item.node.childImageSharp.sizes,
      name: item.node.name
    }
  })

  return items
}

const SocialPage = ({ data }) => {
  console.log(data)
  const items = formatImageObjects(data.allPng).concat(
    formatImageObjects(data.allJpg)
  )

  return <PortfolioList items={items} title="social media" />
}

export default SocialPage

export const query = graphql`
  query SocialQuery {
    allJpg: allFile(
      filter: {
        extension: { eq: "jpg" }
        absolutePath: { regex: "/(social)/" }
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
    allPng: allFile(
      filter: {
        extension: { eq: "png" }
        absolutePath: { regex: "/(social)/" }
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
