import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <StyledLayout>
      <Navbar />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  background-color: ${(props) => props.theme.color.gray};
  color: ${(props) => props.theme.color.white};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledMain = styled.main`
  border: 1px solid red;
  height: 100vh;
  width: 95%;
  padding: 1.5rem 1rem;
`;
export default Layout;
