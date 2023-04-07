import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expenses from './components/Expanses';
import Income from './components/Income';
import Budget from './components/Budget';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/expenses" element={<Expenses />} />
<Route path="/income" element={<Income />} />
<Route path="/budget" element={<Budget />} />
</Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
