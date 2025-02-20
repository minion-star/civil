import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Topbar from './components/Topbar'

function App() {

  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
