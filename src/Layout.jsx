import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const StyledLayout = styled.div`
  color: ${(props) => props.theme.color.white};
`;

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.color.white};
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMain = styled.main`
  width: 95%;
  height: 100%;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Container>
        <Navbar />
        <StyledMain>
          <Outlet />
        </StyledMain>
        <Footer />
      </Container>
    </StyledLayout>
  );
};

export default Layout;
