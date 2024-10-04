//libs
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Cadastro from './pages/cadastroMercadoria/Cadastro'
import Home from './pages/home/Home'

//Css
import './App.css'


function App() {

  return (
    <div className='main'>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Mercadoria/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
