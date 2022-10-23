

import { Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar/Sidebar';
import About from './pages/About';
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="">
      {/* <Header></Header> */}
      <Sidebar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        
        <Route path='/projects' element={<Projects />}></Route>

      </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
