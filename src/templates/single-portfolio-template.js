import React from 'react'
import Img from 'gatsby-image'

const DISPLAY_BOX_HEIGHT = 700
const SinglePortfolioTemplate = ({ data, pathContext }) => {
  //dynamically set the width of the image based on how tall it is to prevent scrolling.
  let width = data.imageSharp.sizes.aspectRatio * DISPLAY_BOX_HEIGHT
  width = width > 1000 ? 1000 : width

  return (
    <div
      style={{
        margin: '2rem auto 0 auto',
        left: '0',
        right: '0',
        width: `${width}px`,
        maxWidth: '100%'
      }}
    >
      <Img sizes={data.imageSharp.sizes} />
    </div>
  )
}

export default SinglePortfolioTemplate

export const query = graphql`
  query SingleQuery($slug: String!) {
    imageSharp(id: { regex: $slug }) {
      id
      sizes {
        aspectRatio
        ...GatsbyImageSharpSizes
      }
    }
  }
`
