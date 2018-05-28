import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import DetailedHeader from '../components/DetailedHeader'
import DropdownLinks from '../components/DropdownLinks'
import Footer from '../components/Footer'
import './index.css'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDropdownOpen: false
    }

    this.openDropdown = this.openDropdown.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  openDropdown() {
    this.setState({ isDropdownOpen: true })
  }

  closeDropdown() {
    this.setState({ isDropdownOpen: false })
  }

  render() {
    console.log(this.props)
    const sizes =
      this.props.data.allFile.edges[0].node.childImageSharp.sizes ||
      this.props.data.allJpg.edges[0].node.childImageSharp.sizes

    if (this.props.location.pathname === '/') {
      return (
        <div className="wrapper">
          <Helmet
            title="Sarah Borton"
            meta={[
              { name: 'description', content: 'Sarah Borton' },
              {
                name: 'keywords',
                content: 'art, painting, social media, design'
              }
            ]}
          />
          <Header signatureSizes={sizes} />
          {this.props.children()}
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="wrapper">
          <Helmet
            title="Sarah Borton"
            meta={[
              { name: 'description', content: 'Sarah Borton' },
              {
                name: 'keywords',
                content: 'art, painting, social media, design'
              }
            ]}
          />
          <DetailedHeader
            openMenu={this.openDropdown}
            closeMenu={this.closeDropdown}
            signatureSizes={sizes}
          />
          {this.props.children()}
          <Footer />
          <DropdownLinks
            isVisible={this.state.isDropdownOpen}
            open={this.openDropdown}
            close={this.closeDropdown}
          />
        </div>
      )
    }
  }
}
// const TemplateWrapper = ({ children, location }) =>

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query HeaderQuery {
    allFile(filter: { relativePath: { eq: "sign.png" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 500) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
