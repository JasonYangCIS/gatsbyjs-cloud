import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from "../../components/section/section"
import Text from "../../components/text/text"
import Card from "../../components/card/card"
import styled from 'styled-components';
import colors from '../../components/_colors';

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .card__skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 95px;
    box-shadow: 0 2px 10px rgba(0,0,0,.3);
    margin: 10px 8px;
    border-radius: 0 0 5px 5px;
    padding: 0;
    .gatsby-image-wrapper {
      margin: 20px 0;
    }
  }
  .card__title {
    display: block;
    font-size: 14px;
    line-height: 18px;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    border-radius: 0 0 5px 5px;
    color: ${colors.white};
    background-color: ${colors.orange};
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      color: ${colors.white};
    }
  }
`;

const Skills = () => {
  const data = useStaticQuery(graphql`
    query SiteSkillsQuery {
      contentfulMySkillsSection {
        sectionTitle
        mySkillsIcons {
          title
          fixed(width:47) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Section>
      <Text type='h2'>{data.contentfulMySkillsSection.sectionTitle}</Text>
      <StyledCardContainer>
        {
          data.contentfulMySkillsSection.mySkillsIcons.map((element, key) => (
            <Card className='card__skills' key={key}>
              <Img fixed={element.fixed} />
              <Text type='p' className='card__title'>{element.title}</Text>
            </Card>
          ))
        }
      </StyledCardContainer>
    </Section>
  )
}

export default Skills
