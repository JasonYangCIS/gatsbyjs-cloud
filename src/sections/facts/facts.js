import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"
import Text from "../../components/text/text"

const Facts = () => {
  const data = useStaticQuery(graphql`
    query SiteFactsQuery {
      contentfulFacts {
        sectionContent {
          sectionContent
        }
        sectionTitle
      }
    }
  `)
  return(
    <Section>
      <Text type='h2'>{data.contentfulFacts.sectionTitle}</Text>
      <Text type='p'>{data.contentfulFacts.sectionContent.sectionContent}</Text>
    </Section>
  )
}

export default Facts
