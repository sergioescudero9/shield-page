import React, { useEffect } from 'react';
import styled from 'styled-components';
import TypeEffect from '../../components/TypeEffect';
import Section from '../../components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: inherit;
`;

const arrayOfTexts = [
  'Dream.',
  'Design.',
  'Develop.',
]
function Home() {
  useEffect(() => {
    window.addEventListener('scroll', changeMainColor);
    return () => {
      window.removeEventListener('scroll');
    }
  }, [])
  const changeMainColor = () => {
    if (window.scrollY > 100) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark")
    }
  }
  return (
    <>
      <Section>
        <Container>
          <TypeEffect arrayOfTexts={arrayOfTexts} />
        </Container>
      </Section>
      <Section>
        Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
      </Section>
    </>
  );
}
export default Home;
