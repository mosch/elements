import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Logo from '../components/Logo.svg'
import Navigation from '../components/Navigation'
import { pathPrefix } from '../../gatsby-config'

import './index.css'

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
      marginTop: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '1440px',
        padding: '0px 1.0875rem 1.45rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottom: '1px solid #EBEBEB'
      }}
    >
      <Logo/>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Allthings Elements
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children, data, ...props }) => {
  return (
    <div>
      <Helmet
        titleTemplate="Allthings Elements - %s"
        title="Welcome"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <link rel="apple-touch-icon" sizes="180x180" href={`${pathPrefix}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${pathPrefix}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${pathPrefix}/favicon-16x16.png`} />
        <link rel="manifest" href={`${pathPrefix}/manifest.json`} />
        <link rel="mask-icon" href={`${pathPrefix}/safari-pinned-tab.svg`} color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1440px',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'stretch',
        }}
      >
        {data.allSitePage && (<Navigation items={data.allSitePage.edges} />)}
        <div style={{ overflow: 'hidden', flex: '1 1 auto' }}>{children()}</div>
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query Index {
    allSitePage(
      filter: { path: { regex: "/\/(atoms|molecules|behaviour|organisms)/" } }
      sort: { order: ASC, fields: [path] }
    ) {
      edges {
        node {
          path
        }
      }
    }
  }
`
