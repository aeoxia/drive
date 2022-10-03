import TopBar from './component/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './page/News';
import Contact from './page/Contact';
import About from './page/About';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
