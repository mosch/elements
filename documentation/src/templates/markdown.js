import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import reactRenderer from 'remark-react'
import frontmatter from 'remark-frontmatter'
import Editor from '../components/Editor'
import Example from '../components/Example'

const test = ({ children, className, ...props }) => {
  if (className === 'language-example') {
    return <Example>{children.join('').trim()}</Example>
  } else {
    const lang = className.split('-')[1]
    return <Editor mode={lang} code={children.join('').trim()} />
  }
}

const preTest = ({ children, className, ...props }) => {
  return (<span>{children}</span>)
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
                code: test,
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
  query BlogPostQuery($slug: String!) {
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
