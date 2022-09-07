import Footer from 'components/Footer';
import Header from 'components/Header';
import ScrollTop from 'components/ScrollTop';
import Spinner from 'components/Spinner';
import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Layout() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <Container>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer ref={ref} />
      <ScrollTop inView={inView} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Layout;
