import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Goals from './views/Goals'
import Projects from './views/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/goals' element={<Goals />} />
      </Routes>
    </BrowserRouter>
  )
}
