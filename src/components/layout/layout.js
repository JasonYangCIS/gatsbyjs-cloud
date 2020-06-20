/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import AOS from "aos";

import Header from "../header/header"
import Footer from "../footer/footer"
import styled from 'styled-components';
import colors from '../_colors';
import breakpoints from '../_breakpoints';
import variables from '../_variables';

const StyledMain = styled.main`
  background: ${colors.white};
  width: 100%;
  display: block;
  padding: 20px;

  @media ${breakpoints.lg} {
    max-width: calc(100% - ${variables.headerLgWidth});
    margin-left: auto;
    padding: 60px;
  }
  @media ${breakpoints.xl} {
    max-width: calc(100% - ${variables.headerXlWidth});
  }
`;

class Layout extends React.Component {
  componentDidMount = () => {
    AOS.init({
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }

  render() {
    return (
      <>
        <Header />
        <StyledMain>{this.props.children}</StyledMain>
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout