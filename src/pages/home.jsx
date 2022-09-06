import Footer from 'components/Footer';
import Header from 'components/Header';
import styled from 'styled-components';
import { colors } from 'styles/colors';

const Home = () => {
  return (
    <Container>
      <Header />

      <Main>
        <MainContainer></MainContainer>
      </Main>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: ${colors.black};
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

export default Home;
