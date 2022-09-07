import Home from 'pages/home';
import Upcoming from 'pages/Upcoming/Upcoming';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
