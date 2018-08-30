import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>
      This setup brings you{' '}
      <a href="https://medium.com/@programmiri/my-favored-scss-setup-with-bootstrap-4-547e9ea290f8">
        my favored SCSS setup with Bootstrap 4
      </a>{' '}
      along with <a href="https://jestjs.io/">Jest</a> &{' '}
      <a href="http://airbnb.io/enzyme/">Enzym</a> ready to use.
    </p>
    <p>Now go and have fun bulding something great!</p>
    <Link className={'btn btn-primary'} to="/page-2/">
      Go to page 2
    </Link>
  </div>
)

export default IndexPage
