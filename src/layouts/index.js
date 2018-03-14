import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="wrapper">
    <Helmet
      title="Sarah Borton"
      meta={[
        { name: 'description', content: 'Sarah Borton' },
        { name: 'keywords', content: 'art, painting, social media, design' },
      ]}
    />
    <Header />
      {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
