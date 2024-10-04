import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

import './App.css'

function App() {

  return (
    <div className='main'>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
