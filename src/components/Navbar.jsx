import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

const Header = styled.header`
  width: 95%;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.3rem 0;
`;

const Logo = styled(Link)`
  font-family: 'Bebas Neue', cursive;
  font-size: 3rem;
  color: ${(props) => props.theme.color.white};
`;

const NavLinks = styled(m.ul)`
  display: flex;
  align-items: center;
  gap: 20px;
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
  font-size: 1.1rem;
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

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <m.div variants={LogoVars} initial="hidden" animate="visible">
          <Logo to="/">B3 STUDIO</Logo>
        </m.div>
        <NavLinks variants={NavbarVars} initial="hidden" animate="visible">
          <NavLinkWrapper variants={NavItemVars}>
            <NavLink to="/">Home</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper variants={NavItemVars}>
            <NavLink to="/work">Work</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper variants={NavItemVars}>
            <NavLink to="/about">About</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper variants={NavItemVars}>
            <NavLink to="/contact">Contact</NavLink>
          </NavLinkWrapper>
        </NavLinks>
      </Nav>
    </Header>
  );
};

export default Navbar;
