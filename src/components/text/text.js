import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import colors from '../_colors';

const StyledTextContainer = styled.div`
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.mdGrey};
    font-weight: 400;
    display: block;
  }
  p {
    color: ${colors.mdGrey};
    font-size: 0.9rem;
  }
`;

class Text extends React.Component {
  render() {
    const { type, className, children } = this.props;
    const validTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

    const safeType = type ? type.toLowerCase() : '';
    const TextEle = validTypes.includes(safeType) ? safeType : 'p';

    return (
      <StyledTextContainer className={className}>
        <TextEle dangerouslySetInnerHTML={{ __html: children }} />
      </StyledTextContainer>
    );
  }
}

export default Text

Text.propTypes = {
  data: PropTypes.string,
}

Text.defaultProps = {
  data: ``,
}