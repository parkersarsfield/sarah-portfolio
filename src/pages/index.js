import React from 'react';
import Link from 'gatsby-link';

import PageLinks from '../components/PageLinks'
import Footer from '../components/Footer'

const links = ['painting', 'poetry', 'social media', 'photography']

const IndexPage = () => (
  <div>
    <PageLinks links={links}/>
  </div>
)

export default IndexPage
