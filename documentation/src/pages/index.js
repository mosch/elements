import React from 'react'
import Logo from '../components/Logo.svg'

const IndexPage = () => (
  <div>
    <Logo />
    <h1>What is it about?</h1>
    <p>
      ELEMENTS is a set of{' '}
      <strong>carefully crafted, high quality React UI components, </strong>
      that Allthings uses to build their mobile app.
    </p>
    <p>
      We use the{' '}
      <a href="http://bradfrost.com/blog/post/atomic-web-design/">
        Atomic Design approach
      </a>
      &nbsp;to structure everything. <br />
    </p>
    <p>Components are crafted for reusability, composiblity and ease of use.</p>
    <p>
      So it's all about Atoms 👩🏻‍🔬👨🏼‍🔬, Molecules, Organisms and how they
      React. 🎉
    </p>
  </div>
)

export default IndexPage
