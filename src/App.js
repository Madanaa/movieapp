import './App.css';
import Home from './components/Home'
import Newest from './components/Newest'

import Navbar from "./components/Navbar";

import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Toprated from './components/Toprated';
import Trending from './components/Trending'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/popular' element={<Newest/>} />
        <Route path='/toprated' element={<Toprated/>} />
        <Route path='/newest' element={<Newest/>} />
        <Route path='/trending' element={<Trending/>} />
      </Routes>
   
    </Router>
  );
}

export default App;
