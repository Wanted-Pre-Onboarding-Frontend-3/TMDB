import Home from 'pages/home';
import TopRated from 'pages/TopRated/TopRated';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie">
          <Route path="top_rated" element={<TopRated />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
