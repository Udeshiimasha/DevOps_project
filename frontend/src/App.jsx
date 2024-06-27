import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateCosmetic from './pages/CreateCosmetics';
import ShowCosmetic from './pages/ShowCosmetic';
import EditCosmetic from './pages/EditCosmetic';
import DeleteCosmetic from './pages/DeleteCosmetic';
import FirstPage from './pages/FirstPage';
import Login from './pages/login';
import Register from './pages/register';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cosmetics/create' element={<CreateCosmetic />} />
      <Route path='/cosmetics/details/:id' element={<ShowCosmetic />} />
      <Route path='/cosmetics/edit/:id' element={<EditCosmetic />} />
      <Route path='/cosmetics/delete/:id' element={<DeleteCosmetic />} />
        
    </Routes>
  )
}

export default App