import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

class NotFoundPage extends React.Component {
  componentDidMount = () => {
    window.VANTA.DOTS({
      el: ".vanta-bg",
      color: 0xd27e36,
      color2: 0xc5620c,
      size: 5.00,
      spacing: 20.00
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage
