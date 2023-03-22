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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  position: relative;
`;

const StyledMain = styled.main`
  border: 1px solid red;
  width: 95%;
  height: 100%;
`;
export default Layout;
