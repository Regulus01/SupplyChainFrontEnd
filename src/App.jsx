//libs
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/home/Home'

//Css
import './App.css'
import CadastroTipoDeMercadoria from './pages/cadastroTipoDeMercadoria/CadastroTipoDeMercadoria'
import CadastroMercadoria from './pages/cadastroMercadoria/CadastroMercadoria'


function App() {
  return (
    <div className="flex flex-column align-items-center gap-3">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Cadastro/TipoDeMercadoria" element={<CadastroTipoDeMercadoria />} />
              <Route path="Cadastro/Mercadoria" element={<CadastroMercadoria />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
