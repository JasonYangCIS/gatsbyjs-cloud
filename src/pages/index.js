import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import Introduction from "../sections/introduction/introduction"
import Experience from "../sections/experience/experience"
import Skills from "../sections/skills/skills"
import Facts from "../sections/facts/facts"
import Projects from "../sections/projects/projects"
import Contact from "../sections/contact/contact"

class IndexPage extends React.Component {
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
        <SEO title="Jason Yang | Frontend Engineer" />
        <Introduction />
        <Projects />
        <Experience />
        <Skills />
        <Facts />
        <Contact />
      </Layout>
    );
  }
}

export default IndexPage
