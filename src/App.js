

import { Route, Routes } from 'react-router-dom';
import AddUser from './component/Pages/AddUser/AddUser';
import Home from './component/Pages/Home/Home';
import Header from './component/Pages/Share/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addUser' element={<AddUser></AddUser>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
