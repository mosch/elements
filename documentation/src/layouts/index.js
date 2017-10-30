import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Logo from '../components/Logo.svg'
import Navigation from '../components/Navigation'
import ElementsNavigation from '../components/ElementsNavigation'
import NavigationItems from '../config/Navigation.json'
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
        maxWidth: '1200px',
        padding: '0px 1.0875rem 1.45rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        borderBottom: '1px solid #EBEBEB',
      }}
    >
      <Logo />
      <a
        href="https://github.com/allthings/elements"
        style={{
          height: '20px',
        }}
      >
        <img
          src="/img/GitHub-Mark-120px-plus.png"
          style={{ height: '20px', width: '20px', margin: 0 }}
        />
      </a>
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${pathPrefix}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${pathPrefix}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${pathPrefix}/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${pathPrefix}/manifest.json`} />
        <link
          rel="mask-icon"
          href={`${pathPrefix}/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'stretch',
        }}
      >
        <div style={{ minWidth: '230px' }}>
          {<Navigation items={NavigationItems} />}
          {data.allSitePage && (
            <ElementsNavigation items={data.allSitePage.edges} />
          )}
        </div>
        <div style={{ overflow: 'hidden', flex: '1 1 auto' }}>{children()}</div>
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default TemplateWrapper

export const query = graphql`
  query Index {
    allSitePage(
      filter: { path: { regex: "//(atoms|molecules|behaviour|organisms)/" } }
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
