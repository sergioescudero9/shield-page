import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  0%, 100%{
    width: 0
  }
  50%{
    width: 100% 
  }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

const TextStyle = styled.h1`
  font-size: ${props => props.theme.sizes.fonts.title};
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 40px;
  animation: 
    ${typing} 3.4s steps(${props=> props.length}, end) infinite,
    ${blinkCaret} .75s step-end infinite;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function TypeEffect({ arrayOfTexts = ['Empty'] }) {
  const [value, setState] = useState(0);

  useEffect(() => {
    const timeOut = setInterval(() => {
      setState(value + 1 === arrayOfTexts.length ? 0 : value + 1)
    }, 3400);
    return  () => {
      clearInterval(timeOut);
    }
  });

  return (
    <>
      <Container>
        <TextStyle length={arrayOfTexts[value].length}>{arrayOfTexts[value]}</TextStyle>
      </Container>
    </>
  );
}
export default TypeEffect;
