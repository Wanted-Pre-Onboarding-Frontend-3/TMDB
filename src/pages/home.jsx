import Footer from 'components/Footer';
import Header from 'components/Header';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <Header />

      <Main>
        <Container></Container>
      </Main>

      <Footer />
    </div>
  );
};

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  border: 1px solid red;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
  border: 1px solid red;
`;

export default Home;
