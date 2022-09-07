import Layout from 'components/Layout';
import Home from 'pages/Home/Home';
import MovieDetail from 'pages/MovieDetail/MovieDetail';
import NowPlaying from 'pages/NowPlaying/NowPlaying';
import Search from 'pages/search';
import TopRated from 'pages/TopRated/TopRated';
import Upcoming from 'pages/Upcoming/Upcoming';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/top-rated" element={<TopRated />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
