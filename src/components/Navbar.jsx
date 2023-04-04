import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import VerticalLine from './VerticalLine';

const Header = styled.header`
  width: 95%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  gap: 3rem;
`;

const LogoWrapper = styled(m.div)`
  display: flex;
  align-items: center;
  height: 1rem;
  gap: 1rem;
`;

const Logo = styled(Link)`
  color: ${(props) => props.theme.color.white};
  font-size: 3.5rem;
  font-family: 'Bebas Neue', cursive;
`;

const BrandName = styled(Link)`
  align-self: center;
  font-size: 1.3rem;
  color: ${(props) => props.theme.color.white};
  letter-spacing: 2.5px;
  font-weight: bold;
`;

const NavLinks = styled(m.ul)`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.color.white};
`;

const NavLinkWrapper = styled(m.li)`
  padding: 5px 0;
  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.color.white};
    position: absolute;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: 0.3s ease-out 0.1s;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;

const NavLink = styled(Link)`
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: ${(props) => props.theme.color.white};
`;

const LogoVars = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const NavbarVars = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      delayChildren: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const NavItemVars = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: { opacity: 1, scale: 1 },
};

export default function Navbar() {
  return (
    <Header>
      <Nav>
        <LogoWrapper variants={LogoVars} initial="hidden" animate="visible">
          <Logo to="/">B3.</Logo>
          <VerticalLine />
          <BrandName to="/">b3 studio</BrandName>
        </LogoWrapper>

        <NavLinks variants={NavbarVars} initial="hidden" animate="visible">
          <NavLinkWrapper variants={NavItemVars}>
            <NavLink to="/">HOME</NavLink>
          </NavLinkWrapper>
          <m.div variants={NavItemVars}>/</m.div>
          <NavLinkWrapper variants={NavItemVars}>
            <NavLink to="/work">WORK</NavLink>
          </NavLinkWrapper>
          <m.div variants={NavItemVars}>/</m.div>
          <NavLinkWrapper variants={NavItemVars}>
            <NavLink to="/about">ABOUT</NavLink>
          </NavLinkWrapper>
          <m.div variants={NavItemVars}>/</m.div>
          <NavLinkWrapper variants={NavItemVars}>
            <NavLink to="/contact">CONTACT</NavLink>
          </NavLinkWrapper>
        </NavLinks>
      </Nav>
    </Header>
  );
}
