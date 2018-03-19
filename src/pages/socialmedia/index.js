import React from 'react'
import PortfolioList from '../../components/PortfolioList'


const SocialPage = ({ data }) => {
    const items = data.allFile.edges.map(item => {
        return {
            sizes: item.node.childImageSharp.sizes,
            name: item.node.name
        }
    })
    
    return (
        <PortfolioList items={items} title="social media" />
    )
}

export default SocialPage

export const query = graphql`
query SocialQuery {
    allFile(filter: {
        extension: {eq: "jpg"},
        absolutePath: {regex: "/(social)/"}}) {
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
