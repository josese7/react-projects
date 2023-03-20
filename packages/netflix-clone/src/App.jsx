import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import  NavBar  from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

const App = () => {


  return (
    <>
    <AuthContextProvider>
      
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={ <LogIn/>}/>
        <Route path='/signup' element={ <SignUp/>}/>
        <Route path='/account' element={ <ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>

    </AuthContextProvider>
    </>
  );
}

export default App
