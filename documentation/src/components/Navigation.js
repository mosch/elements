import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Navigation = ({ items }) => {
  return (
    <navigation className="navigation">
      {items.map(({ title, items }) => (
        <ul className="navigation-list" key={title}>
          <header>{title}</header>
          {items.map(({ title, link }) => (
            <li key={title+link}>
              <Link
                activeClassName="active"
                exact
                to={link}
                style={{
                  textDecoration: 'none',
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </navigation>
  )
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ),
}

export default Navigation
