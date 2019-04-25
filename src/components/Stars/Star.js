import React from 'react';
import styled from 'styled-components';

const FilledStyle = styled.span`
  color: ${props => props.theme.colors.secondary};
`;

const UnFilledStyle = styled.span`
  color: ${props => props.theme.colors.secondary};
`;

function Star({ isFilled }) {
  return (
    isFilled ?
    <FilledStyle>
      &#9733;
    </FilledStyle>
    :
    <UnFilledStyle>
      &#9734;
    </UnFilledStyle>
  );
}
export default Star;
