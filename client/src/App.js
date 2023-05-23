import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Userform from './components/Userform';
import Adminpage from './components/Adminpage';
import UserList from './components/Approveed';
import Disapprove from './components/Disapproved'
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userform' element={<Userform/>}/>
        <Route path='/admin' element={<Adminpage/>}/>
        <Route path='/approve' element={<UserList/>}/>
        <Route path='/disapprove' element={<Disapprove/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
