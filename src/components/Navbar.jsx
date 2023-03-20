import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../fonts/font.css';

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

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.white};
`;

export default Navbar;
