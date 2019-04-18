import React, { useEffect } from 'react';
import styled from 'styled-components';
import TypeEffect from '../../components/TypeEffect';

const Container = styled.section`
  min-height: 105vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const arrayOfTexts = [
  'Dream.',
  'Design.',
  'Develop.',
]
function Home() {
  useEffect(() => {
    window.addEventListener('scroll', changeMainColor);
    return  () => {
      window.removeEventListener('scroll');
    }
  }, [])
  const changeMainColor = () => {
    if(window.scrollY > 100){
      document.body.classList.add("dark");
    }else {
      document.body.classList.remove("dark")
    }
  }
  return (
    <Container>
      <TypeEffect arrayOfTexts={arrayOfTexts} />
    </Container>
  );
}
export default Home;
