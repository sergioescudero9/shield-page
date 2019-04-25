import React from 'react';
import styled from 'styled-components';
import Star from './Star';

const Style = styled.h1`
  content: '\u2606';
  ::before{
    content: '\u2605';
    background: red;
    color: black;
  }
  ::after{
    content: '\u2606';
    background: red;
    color: black;
  }
  
`;

function Stars({ totalOfStart, numberOfStarFilled }) {
  return (
    <h1>
      <Star isFilled={true} />
      <Star />
    </h1>
  );
}
export default Stars;
