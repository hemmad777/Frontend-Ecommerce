import { Routes,Route } from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'
import './App.css'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </> 
  )
}

export default App
