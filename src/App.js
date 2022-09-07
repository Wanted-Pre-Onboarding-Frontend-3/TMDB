import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import MovieDetail from 'pages/MovieDetail/MovieDetail';
import Search from 'pages/search';
import TopRated from 'pages/TopRated/TopRated';
import Upcoming from 'pages/Upcoming/Upcoming';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/top_rated" element={<TopRated />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
