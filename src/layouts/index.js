import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './../scss/main.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={'Mirjams setup'}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={'Gatsby setup with Bootstrap4, Jest and Enzym'} />
    <div className="container">{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
