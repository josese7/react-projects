import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'

import  NavBar  from './components/NavBar';
import Home from './pages/Home';

const App = () => {


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
    </Routes>
    </>
  );
}

export default App
