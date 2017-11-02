import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import reactRenderer from 'remark-react'
import frontmatter from 'remark-frontmatter'
import Editor from '../components/Editor'
import Example from '../components/Example'

const code = ({ children, className, ...props }) => {
  if (className === 'language-example') {
    return <Example>{children.join('').trim()}</Example>
  } else {
    const lang = className.split('-')[1]
    return <Editor mode={lang} code={children.join('').trim()} />
  }
}

code.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

// hacky fix to remove the prestyled <pre> tag
const preTest = ({ children, ...props }) => {
  return <span>{children}</span>
}

preTest.propTypes = {
  children: PropTypes.string.isRequired,
}

class MarkdownPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }).isRequired,
  }

  static defaultProps = {}

  render() {
    const post = this.props.data.markdownRemark
    return (
      <div>
        {
          remark()
            .use(frontmatter, ['yaml', 'toml'])
            .use(reactRenderer, {
              remarkReactComponents: {
                code: code,
                pre: preTest,
              },
              sanitize: false,
            })
            .processSync(post.internal.content).contents
        }
      </div>
    )
  }
}

export default MarkdownPage

export const query = graphql`
  query MarkdownPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      internal {
        content
      }
      frontmatter {
        title
      }
    }
  }
`
