//libs
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/home/Home'

//Css
import './App.css'
import CadastroTipoDeMercadoria from './pages/cadastroTipoDeMercadoria/CadastroTipoDeMercadoria'
import CadastroMercadoria from './pages/cadastroMercadoria/CadastroMercadoria'
import CadastroEstoque from './pages/cadastroEstoque/cadastroEstoque'
import CadastroEntrada from './pages/cadastroEntrada/CadastroEntrada'
import CadastroSaida from './pages/cadastroSaida/CadastroSaida'
import CadastrosHome from './pages/cadastrosHome/cadastrosHome'


function App() {
  return (
    <div className="flex flex-column align-items-center gap-3">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Cadastro" element={<CadastrosHome />} />
              <Route path="Cadastro/TipoDeMercadoria" element={<CadastroTipoDeMercadoria />} />
              <Route path="Cadastro/Mercadoria" element={<CadastroMercadoria />} />
              <Route path="Cadastro/Estoque" element={<CadastroEstoque />} />
              <Route path="Cadastro/Entrada" element={<CadastroEntrada />} />
              <Route path="Cadastro/Saida" element={<CadastroSaida />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
