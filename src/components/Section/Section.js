import React from 'react';
import styled from 'styled-components';

const SectionStyle = styled.section`
  min-height: 100vh;
  padding: 40px 180px;
`;

function Section({ children, ...rest }) {
  return (
    <SectionStyle {...rest}>
      {children}
    </SectionStyle>
  );
}
export default Section;
