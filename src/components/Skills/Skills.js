import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';

const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Skills({ skills }){
  return (
    <>
      <h2>Skills</h2>
      <ContainerStyle>
      {
        skills.map(({ name, numberOfStarFilled }) => (
          <Skill name={name} numberOfStarFilled={numberOfStarFilled} />
        ))
      }
    </ContainerStyle>
    </>
  );
}

export default Skills;
