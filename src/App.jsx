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
import RelatorioAnual from './pages/relatorioAnual/RelatorioAnual'
import Relatorio from './pages/relatorio/relatorio'
import GerarPdf from './pages/relatorioPdf/GerarPdf'
import RelatorioEntradaPdf from './pages/relatorioPdf/RelatorioEntradaPdf'
import RelatorioSaidaPdf from './pages/relatorioPdf/RelatorioSaidaPdf'


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

              <Route path="Relatorio" element={<Relatorio />} />
              <Route path="Relatorio/Anual" element={<RelatorioAnual />} />

              <Route path="Relatorio/Anual/GerarPdf/:id" element={<GerarPdf />} />
              <Route path="Relatorio/Anual/GerarPdf/:id/:ano/:mes/Entrada/Pdf" element={<RelatorioEntradaPdf />} />
              <Route path="Relatorio/Anual/GerarPdf/:id/:ano/:mes/Saida/Pdf" element={<RelatorioSaidaPdf />} />

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
