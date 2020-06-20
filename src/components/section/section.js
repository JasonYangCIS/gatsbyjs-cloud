import React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components';
import colors from '../_colors';
import breakpoints from '../_breakpoints';

const StyledSection = styled.section`
	max-width: 700px;
	display: block;
	border-bottom: 2px solid ${colors.orange};
	width: 100%;
	margin: 20px auto;
	padding: 20px 0;
	@media ${breakpoints.lg} {
		margin: 20px 0;
		padding: 20px 0;
	}
`;

const Section = ({ children }) => {

	return (
		<StyledSection
			data-aos="fade-up"
		>
			{children}
		</StyledSection>
	)
}

Section.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Section
