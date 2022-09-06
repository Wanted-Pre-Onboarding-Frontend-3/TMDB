import Home from 'pages/home';
import MovieDetail from 'pages/MovieDetail/MovieDetail';
import Search from 'pages/search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NowPlaying } from "./pages/NowPlaying/NowPlaying";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
          <Route path="/movies/now_playing" element={<NowPlaying />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
