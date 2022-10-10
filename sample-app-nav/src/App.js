import TopBar from './component/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './page/Contact';
import About from './page/About';
import Home from './page/Home';
import MovieListPage from './page/MovieListPage';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
