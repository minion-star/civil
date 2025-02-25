import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Sidebar/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
