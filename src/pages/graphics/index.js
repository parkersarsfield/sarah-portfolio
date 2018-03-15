import React from 'react'
import Img from 'gatsby-image'

import NoContent from '../../components/NoContent'

const GraphicsPage = ({ data }) => {

    const items = data.allFile === null ? [] : data.allFile.edges.map(item => {
        return {
            sizes: item.node.childImageSharp.sizes,
            name: item.node.name
        }
    });

    return (
        <div>
            <div className="portfolio-title">graphics</div>
            <div className="portfolio-list">
                {items.length === 0 ? <NoContent /> : items.map(item => <Img className="portfolio-item" sizes={item.sizes} />)}
            </div>
        </div>
    )
}

export default GraphicsPage

export const query = graphql`
query GraphicsQuery {
    allFile(filter: {
        extension: {eq: "jpg"},
        absolutePath: {regex: "/(graphics)/"}}) {
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
