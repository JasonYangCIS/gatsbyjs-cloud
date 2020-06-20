import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"
import Text from "../../components/text/text"
import colors from '../../components/_colors';
import styled from 'styled-components';

const StyledProjectsContainer = styled.div`
  li {
    margin-bottom: 0;
    color: ${colors.mdGrey};
    font-size: 0.9rem;
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query SiteProjectsQuery {
      contentfulFavoriteWebsiteProjects {
        childContentfulFavoriteWebsiteProjectsSectionContentTextNode {
          childMarkdownRemark {
            html
          }
        }
        sectionTitle
      }
    }
  `)
  return (
    <Section>
      <StyledProjectsContainer>
        <Text type='h2'>{data.contentfulFavoriteWebsiteProjects.sectionTitle}</Text>
        <div dangerouslySetInnerHTML={{ __html: data.contentfulFavoriteWebsiteProjects.childContentfulFavoriteWebsiteProjectsSectionContentTextNode.childMarkdownRemark.html}}></div>
      </StyledProjectsContainer>
    </Section>
  )
}

export default Projects
