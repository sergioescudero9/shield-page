import React, { useEffect } from 'react';
import styled from 'styled-components';
import TypeEffect from 'shield-react/TypeEffect';
import Section from 'shield-react/Section';
import Skills from 'shield-react/Skills';

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

const skills = [
  {
    name: 'Javascript' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Node' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Angular *' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Ionic *' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Cordova' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Typescript' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Sass' ,
    numberOfStarFilled: 5
  },
  {
    name: 'React' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Redux' ,
    numberOfStarFilled: 5
  },
  {
    name: 'styled-components' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Ant design' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Bootstrap' ,
    numberOfStarFilled: 5
  },
  {
    name: 'CSS3' ,
    numberOfStarFilled: 5
  },
  {
    name: 'HTML5' ,
    numberOfStarFilled: 5
  },
  {
    name: 'JSON' ,
    numberOfStarFilled: 5
  },
  {
    name: 'JQuery' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Java' ,
    numberOfStarFilled: 5
  },
  {
    name: 'C#' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Entity framework' ,
    numberOfStarFilled: 5
  },
  {
    name: 'WebApi' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Razor' ,
    numberOfStarFilled: 4
  },
  {
    name: 'Xamarin' ,
    numberOfStarFilled: 4
  },
  {
    name: 'SQL' ,
    numberOfStarFilled: 5
  },
  {
    name: 'No SQL databases' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Git' ,
    numberOfStarFilled: 5
  },
  {
    name: 'Lumen' ,
    numberOfStarFilled: 3
  },
  {
    name: 'GraphQL' ,
    numberOfStarFilled: 2
  },
]

function Home() {
  useEffect(() => {
    window.addEventListener('scroll', changeMainColor);
    return () => {
      window.removeEventListener('scroll', changeMainColor);
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
        <Skills skills={skills} />
      </Section>
    </>
  );
}
export default Home;
