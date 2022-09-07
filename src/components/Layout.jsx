import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Layout;
