import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'

const styles = {
  list: css({
    listStyle: 'none'
  }),
  item: css({
    marginBottom: 'calc(1.56rem / 6)'
  }),

  navigation: css({
    margin: '0',
    flex: '0 0 14rem'
  }),
}

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
    <div {...styles.navigation}>
      {Object.keys(index).map(type => {
        return (
          <ul {...styles.list}>
            <h3 style={{ textTransform: 'capitalize' }}>{type}</h3>
            {Object.values(index[type]).map(({ name, path }) => (
              <li {...styles.item}>
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
