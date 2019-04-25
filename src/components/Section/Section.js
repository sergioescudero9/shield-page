import React from 'react';
import styled from 'styled-components';

const SectionStyle = styled.section`
  min-height: 100vh;
`;

function Section({ children }) {
  return (
    <SectionStyle>
      {children}
    </SectionStyle>
  );
}
export default Section;
