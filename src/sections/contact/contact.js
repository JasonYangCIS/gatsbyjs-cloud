import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"
import Text from "../../components/text/text"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query SiteContactQuery {
      contentfulContact {
        sectionTitle
        sectionContent {
          sectionContent
        }
      }
    }
  `)
  return(
    <Section>
      <Text type='h2'>{data.contentfulContact.sectionTitle}</Text>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulContact.sectionContent.sectionContent}}></div>
    </Section>
  )
}

export default Contact
