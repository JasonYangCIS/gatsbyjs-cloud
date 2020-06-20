import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"
import Text from "../../components/text/text"
import Card from "../../components/card/card"
import styled from 'styled-components';
import colors from '../../components/_colors';

const StyledPContainer = styled.div`
  width: 100%;
  display: inline-block;
  color: ${colors.mdGrey};
  margin-top: 10px;
  padding-top: 10px;
  margin-bottom: 0;
  border-top: 2px solid ${colors.offWhite};
`;
const Experience = () => {
  const data = useStaticQuery(graphql`
    query SiteExperienceQuery {
      contentfulExperience {
        experience {
          sectionContent {
            sectionContent
          }
          company
          datePosition
        }
        sectionTitle
      }
    }
  `)

  return (
    <Section>
      <Text type='h2'>{data.contentfulExperience.sectionTitle}</Text>
      {
        data.contentfulExperience.experience.map((element, key) => (
          <Card key={key}>
            <Text type='h4'>{element.company}</Text>
            <Text type='h5'>{element.datePosition}</Text>
            <StyledPContainer dangerouslySetInnerHTML={{ __html: element.sectionContent.sectionContent }} />
          </Card>
        ))
      }
    </Section>
  )
}

export default Experience
