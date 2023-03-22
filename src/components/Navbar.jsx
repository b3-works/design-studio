import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

const Header = styled.header`
  width: 95%;
  position: sticky;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

const Logo = styled(Link)`
  font-family: HansonBold;
  font-size: 1.7rem;
  color: ${(props) => props.theme.color.white};
`;

const NavLinks = styled(m.ul)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.white};
`;

const LogoVariants = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const NavbarVariant = {
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

const NavItemVariant = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: { opacity: 1, scale: 1 },
};

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <m.div variants={LogoVariants} initial="hidden" animate="visible">
          <Logo to="/">B3 STUDIO</Logo>
        </m.div>
        <NavLinks variants={NavbarVariant} initial="hidden" animate="visible">
          <m.li variants={NavItemVariant}>
            <NavLink to="/">HOME</NavLink>
          </m.li>
          <m.li variants={NavItemVariant}>
            <NavLink to="/work">WORK</NavLink>
          </m.li>
          <m.li variants={NavItemVariant}>
            <NavLink to="/about">ABOUT</NavLink>
          </m.li>
          <m.li variants={NavItemVariant}>
            <NavLink to="/contact">CONTACT</NavLink>
          </m.li>
        </NavLinks>
      </Nav>
    </Header>
  );
};

export default Navbar;
