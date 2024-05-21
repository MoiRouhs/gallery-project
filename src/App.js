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
    <div className="flex justify-center">
      <Router>
        <Navigation/>
        <div className="relative">
          <Routes>
            <Route path="/brother" element={<Brother argClass='h-lvh'/>} />
            <Route path="/dolls" element={<Dolls argClass='h-lvh'/>} />
            <Route path="/hanabi" element={<HanaBi argClass='h-lvh'/>} />
            <Route path="/violentcop" element={<ViolentCop argClass='h-lvh'/>} />
            <Route path="/zatoichi" element={<Zatoichi argClass='h-lvh'/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
