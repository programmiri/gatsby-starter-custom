import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="bg-secondary mb-3">
    <div className="container p-3">
      <h1>
        <Link to="/" className="text-white">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
