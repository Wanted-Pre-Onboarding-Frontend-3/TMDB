import Home from 'pages/home';
import MovieDetail from 'pages/MovieDetail/MovieDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movie_id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
