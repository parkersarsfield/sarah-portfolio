// import React from 'react'
// import Img from 'gatsby-image'

// import NoContent from '../../components/NoContent'

// const PaintingPage = ({ data }) => {
//   const items =
//     data.allFile === null
//       ? []
//       : data.allFile.edges.map(item => {
//           return {
//             sizes: item.node.childImageSharp.sizes,
//             id: item.node.id
//           }
//         })

//   return (
//     <div>
//       <div className="portfolio-title">paintings</div>
//       <div className="portfolio-list">
//         {items.length === 0 ? (
//           <NoContent />
//         ) : (
//           items.map(item => (
//             <Img className="portfolio-item" sizes={item.sizes} key={item.id} />
//           ))
//         )}
//       </div>
//     </div>
//   )
// }

// export default PaintingPage

// export const query = graphql`
//   query PaintingQuery {
//     allFile(
//       filter: {
//         extension: { eq: "jpg" }
//         absolutePath: { regex: "/(painting)/" }
//       }
//     ) {
//       edges {
//         node {
//           id
//           childImageSharp {
//             sizes(maxWidth: 640) {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `

import React from 'react'
import PortfolioGrid from '../../components/PortfolioGrid'

const PaintingPage = ({ data }) => {
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
    <PortfolioGrid items={items} title="painting" categorySlug="/painting" />
  )
}

export default PaintingPage

export const query = graphql`
  query PaintingQuery {
    allFile(filter: { absolutePath: { regex: "/(painting)/" } }) {
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
