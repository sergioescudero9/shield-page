import React from 'react';
import styled from 'styled-components';
import Star from './Star';

const ContainerStyle = styled.div`
  :hover{
  }
`;

function Stars({ totalOfStart = 5, numberOfStarFilled = 0}) {
  const array = [];
  for (let index = 0; index < totalOfStart; index++) {
    array.push((index < numberOfStarFilled ? <Star isFilled /> : <Star />))
  }
  return (
    <ContainerStyle>
      {array}
    </ContainerStyle>
  );
}
export default Stars;
