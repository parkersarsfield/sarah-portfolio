import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import DetailedHeader from '../components/DetailedHeader'

import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children, location }) => {
  if (location.pathname === '/') {
  return (
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
}
else {
  return (
    <div className="wrapper">
    <Helmet
      title="Sarah Borton"
      meta={[
        { name: 'description', content: 'Sarah Borton' },
        { name: 'keywords', content: 'art, painting, social media, design' },
      ]}
    />
    <DetailedHeader />
      {children()}
    <Footer />
  </div>
  )
}
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
