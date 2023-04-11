import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Container = styled.div`
  color: ${(props) => props.theme.color.ivory};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMain = styled.main`
  border: 1rem solid ${(props) => props.theme.color.red};
  border-radius: 3rem;
  width: 95%;
  height: 100%;
`;

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </Container>
  );
};

export default Layout;
