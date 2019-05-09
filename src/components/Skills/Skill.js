import React from 'react';
import styled from 'styled-components';
import Stars from '../Stars';

const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin: 0 1.65% 0 1.65%;
`;


function Skill({ name, numberOfStarFilled }){
  return (
    <ContainerStyle>
      <span>{name}</span>
      <Stars totalOfStart={5} numberOfStarFilled={numberOfStarFilled} />
    </ContainerStyle>
  )
}

export default Skill;
