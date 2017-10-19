import React from 'react'
import Link from 'gatsby-link'

export default ({ items }) => {
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
    <div className="navigation">
      {Object.keys(index).map(type => {
        return (
          <ul className="navigation-list">
            <h3 style={{ textTransform: 'capitalize' }}>{type}</h3>
            {Object.values(index[type]).map(({ name, path }) => (
              <li>
                <Link
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
    </div>
  )
}
