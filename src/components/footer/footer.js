import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import colors from '../_colors';
import breakpoints from '../_breakpoints';
import variables from '../_variables';

const StyledFooter = styled.footer`
  background-color: ${colors.orange};
  position: relative;
  width: 100%;
  padding: 50px 20px;
  text-align: center;
  @media ${breakpoints.lg} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: ${variables.headerLgWidth};
    z-index: 100;
    opacity: 0.95;
    padding: 20px 10px;
  }
  @media ${breakpoints.xl} {
    width: ${variables.headerXlWidth};
  }
  ul {
    margin: 0;
    li {
      list-style: none;
      display: inline-block;
      margin: 0 10px;
      font-size: 0.75rem;
      a {
        color: ${colors.white};
        opacity: 0.7;
        transition: all 0.3s ease;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        &:hover {
          opacity: 1;
          background: ${colors.white};
          text-decoration: none;
        }
        &.fa {
          line-height: 30px;
          font-size: 1.15rem;
        }
        &.fa-github:hover {
          color: ${colors.gitHub};
        }
        &.fa-linkedin:hover {
            color: ${colors.linkedIn};
        }
        &.fa-instagram:hover {
            color: ${colors.instagram};
        }
      }
      span {
        display: none;
      }
    }
    &.copyright li {
      color: ${colors.white};
      opacity: 0.7;
      width: 100%;
      margin: 0;
    }
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      contentfulFooter {
        childContentfulFooterSectionContentTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <StyledFooter
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="500"
      dangerouslySetInnerHTML={{ __html: data.contentfulFooter.childContentfulFooterSectionContentTextNode.childMarkdownRemark.html }} 
    />
  )
}

export default Footer
