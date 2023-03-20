import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width: 95%;
  max-width: 2000px;
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
  font-size: 2rem;
  color: ${(props) => props.theme.color.white};
`;

const Test = styled.div`
  font-size: 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: black;
  font-size: 1.3rem;
  color: ${(props) => props.theme.color.white};
`;

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Logo to="/">B3 STUDIO</Logo>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/work">WORK</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </NavLinks>
      </Nav>
    </Header>
  );
};

export default Navbar;
