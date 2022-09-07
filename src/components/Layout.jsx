import Footer from 'components/Footer';
import Header from 'components/Header';
import ScrollTop from 'components/ScrollTop';
import Spinner from 'components/Spinner';
import React, { Suspense, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Layout() {
  const { ref, inView, entry } = useInView();
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    setIsScrolledDown(
      inView || (!inView && entry?.boundingClientRect.top < 100),
    );
  }, [inView, entry]);

  return (
    <Container>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ScrollTopTarget ref={ref} />
      <ScrollTop isScrolledDown={isScrolledDown} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

const ScrollTopTarget = styled.div`
  position: absolute;
  top: 1100px;
  width: 100%;
  z-index: -1;
`;

export default Layout;
