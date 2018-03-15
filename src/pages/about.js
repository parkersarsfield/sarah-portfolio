import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import './about.css'
const AboutPage = ({data}) => (
    <div className="about-page">
        <div className="about-header">about me</div>
        <Img className="about-profile-picture"resolutions={data.allFile.edges[0].node.childImageSharp.resolutions} />
        <p className="about-intro">Hi! I'm Sarah B. </p> 
        <p className="about-blurb">I'm a Durham based artist, designer, social media expert, and lover of Jesus. I'm moving to D.C. soon to pursue my art career. I am always available for hire for one time projects or full time work.
            If you like my work, please <Link to="/contact">contact me!</Link>
        </p>
    </div>
)

export default AboutPage

export const query = graphql`
query AboutQuery {
    allFile (filter: {relativePath: {eq :"biopic.jpg"}}){
      edges {
        node {
          childImageSharp {
            resolutions(width: 200, height: 200, cropFocus: CENTER) {
                ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`  