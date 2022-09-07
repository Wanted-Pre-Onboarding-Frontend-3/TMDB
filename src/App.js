import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Search from 'pages/search';
import MovieDetail from 'pages/MovieDetail/MovieDetail';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
