import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '../Logo';

const LogoContainer = styled.li`
  max-width: 0;
  overflow: hidden;
  transition: all 0.8s ease-in;
  font-weight: 600;
  ${({ theme: { sizes: { fonts: { little } }, colors: { neutral } } }) => (
    `
      font-size: ${little};
      background: ${neutral};
    `
  )};
  &.fixed-nav{
    max-width: 500px;
  }
  @media (min-width: ${({ theme: { sizes: { breaks: { mobile } } } }) => mobile}) {
    font-size: ${({ theme: { sizes: { fonts: { big } } } }) => big};
  }
`;

const commonLink = css`
  text-decoration: none;
  padding: 14px;
  display: inline-block;
  transition: all 0.2s;
`;

const LogoLink = styled(Link)`
  color: black;
  ${commonLink}
`;

const LinkStyle = styled(Link)`
  color: ${({ theme: { colors: { neutral } } }) => neutral};
  text-transform: uppercase;
  ${commonLink}
`;

const ListItem = styled.li`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const NavStyle = styled.nav`
  background: black;
  top: 0;
  width: 100%;
  transition:all 0.5s;
  position: relative;
  z-index: 1;

  &.fixed-nav {
    position: fixed;
  }
`;

const links = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/about',
    text: 'About',
  },
];

function Nav(){
  const offsetTop = null;
  const refNav = useRef(null);
  const refLogo = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', fixHeader);
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const fixHeader = () => {
    if (window.scrollY > offsetTop) {
      document.body.style.paddingTop = `${refNav.current.offsetHeight}px`;
      refNav.current.classList.add('fixed-nav');
      refLogo.current.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      refNav.current.classList.remove('fixed-nav');
      refLogo.current.classList.remove('fixed-nav');
    }
  }
    return (
      <NavStyle ref={refNav}>
        <ListContainer>
          <LogoContainer ref={refLogo}>
            <LogoLink to="/">
              <Logo />
            </LogoLink>
          </LogoContainer>
          {links.map(({ to, text }) => (
            <ListItem key={text}>
              <LinkStyle to={to}>{text}</LinkStyle>
            </ListItem>
          ))}
        </ListContainer>
      </NavStyle>
    );
}

export default Nav;
