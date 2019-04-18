import React from 'react';
import styled from 'styled-components';

const PhraseStayle = styled.h1`
  font-size: ${props => props.theme.sizes.fonts.title};
  text-align: center;
`;

function Phrase() {
  return (
    <>
      <PhraseStayle>A man who is not willing to fight for what he wants, deserves what he gets!</PhraseStayle>
      <h2>wer nicht für das kämpft was er will verdient nicht was er sich wünscht!</h2>
    </>
  );
}
export default Phrase;
