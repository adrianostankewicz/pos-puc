import './App.css';
import { Header } from './components/Header';
import { Home } from './views/Home';
import { About } from './views/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { MovieDetail } from './views/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>  
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
