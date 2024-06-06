import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './views/Inicio'
import Goals from './views/Goals'
import Projects from './views/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/goals' element={<Goals />} />
      </Routes>
    </BrowserRouter>
  )
}
