import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"
import Text from "../../components/text/text"

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query SiteIntroductionQuery {
      contentfulIntroduction {
        sectionTitle
        sectionContent {
          sectionContent
        }
      }
    }
  `)
  return(
    <Section>
      <Text type='h2'>{data.contentfulIntroduction.sectionTitle}</Text>
      <Text type='p'>{data.contentfulIntroduction.sectionContent.sectionContent}</Text>
    </Section>
  )
}

export default Introduction
