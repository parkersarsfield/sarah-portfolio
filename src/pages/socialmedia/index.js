import React from 'react'
import PortfolioGrid from '../../components/PortfolioGrid'

const SocialPage = ({ data }) => {
  const items = data.allFile.edges
    .map(item => {
      return item.node.fullImage === null
        ? null
        : {
            fullSizes: item.node.fullImage.sizes,
            thumbnailSizes: item.node.thumbnail.sizes,
            name: item.node.name,
            slug: item.node.fields.slug
          }
    })
    .filter(item => item !== null)

  return (
    <PortfolioGrid
      items={items}
      title="social media"
      categorySlug="/socialmedia"
    />
  )
}

export default SocialPage

export const query = graphql`
  query SocialQuery {
    allFile(filter: { absolutePath: { regex: "/(social)/" } }) {
      edges {
        node {
          id
          fullImage: childImageSharp {
            sizes(maxWidth: 640) {
              ...GatsbyImageSharpSizes
            }
          }
          fields {
            slug
          }
          thumbnail: childImageSharp {
            sizes(maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
