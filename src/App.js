import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Brother from './components/Brother';
import Dolls from './components/Dolls';
import HanaBi from './components/HanaBi';
import ViolentCop from './components/ViolentCop';
import Zatoichi from './components/Zatoichi';
import Navigation from './components/Navigation';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/brother" element={<Brother/>} />
          <Route path="/dolls" element={<Dolls/>} />
          <Route path="/hanabi" element={<HanaBi/>} />
          <Route path="/violentcop" element={<ViolentCop/>} />
          <Route path="/zatoichi" element={<Zatoichi/>} />
        </Routes>
        <Navigation/>
      </Router>
  );
}
export default App;
