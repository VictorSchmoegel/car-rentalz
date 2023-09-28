import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Models from './pages/Models';
import Testimonials from './pages/Testimonials';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/testimonials" element={<Testimonials />} />
          console.log(Routes);
        </Routes>
      </div>
  );
}

export default App;
