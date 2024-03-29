import React from 'react';
import Form from './pages/form/form.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main.jsx';
import GuestZal from './pages/guest_zal/guest_zal.jsx';
import Menu from './pages/menu/menu.jsx';
import MainCafe from './pages/main-cafe/main-cafe.jsx';
import Admin from './pages/admin/admin.jsx';
import Pay from './pages/pay/pay.jsx';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/supara/main' element={<MainCafe />} />
        <Route path='/supara/guest_zal' element={<GuestZal />} />
        <Route path='/supara/menu' element={<Menu />} />
        <Route path='/supara/form' element={<Form />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/supara/pay' element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;