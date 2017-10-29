import React from 'react'
import Link from 'gatsby-link'

const Navigation = ({ items }) => {
  const index = items.reduce((acc, val) => {
    const path = val.node.path.split('/')
    const type = path[1]
    const component = path[2]
    acc[type] = [
      ...(acc[type] || []),
      {
        name: component,
        path: val.node.path,
      },
    ]
    return acc
  }, {})

  return (
    <navigation className="navigation">
      <ul className="navigation-list">
        <header>Getting started</header>
        <li>
          <Link
            activeClassName="active"
            exact
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            Welcome
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active"
            to={'/examples/form'}
            style={{
              textDecoration: 'none',
            }}
          >
            Forms
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active"
            to={'/behaviours/ThemeProvider/'}
            style={{
              textDecoration: 'none',
            }}
          >
            Themes and styling
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active"
            to={'/behaviours/ResourceProvider/'}
            style={{
              textDecoration: 'none',
            }}
          >
            Using Resouces
          </Link>
        </li>
      </ul>
      {Object.keys(index).map(type => {
        return (
          <ul className="navigation-list" key={type}>
            <header style={{ textTransform: 'capitalize' }}>{type}</header>
            {Object.values(index[type]).map(({ name, path }) => (
              <li key={path}>
                <Link
                  activeClassName="active"
                  to={path}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )
      })}
    </navigation>
  )
}

export default Navigation
