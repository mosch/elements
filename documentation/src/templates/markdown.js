import React from 'react'

class MarkdownPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }


  render() {
    const post = this.props.data.markdownRemark
    return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default MarkdownPage

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
