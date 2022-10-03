import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import Bootcamp from './bootcamp/Bootcamp';
import Blog from './blog/Blog';
import NavBar from './component/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
