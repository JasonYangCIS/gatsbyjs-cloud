import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
	margin-bottom: 40px;
	display: block;
	padding: 10px;
	box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);

	h1, h2, h3, h4, h5, h6 {
		margin-bottom: 0;
	}
	h4 {
		font-size: 1.35em;
    margin-bottom: 5px;
	}
	p {
		font-size: .75rem;
		line-height: 1.25;
	}
`;

const Card = ({ className, children }) => {

  return (
    <StyledCard className={className}>
			{children}
    </StyledCard>
  )
}

Card.propTypes = {
  data: PropTypes.string,
}

Card.defaultProps = {
  data: ``,
}

export default Card
