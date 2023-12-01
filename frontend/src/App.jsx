import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Projects from './components/Projects'
import CreateProjects from './components/CreateProjects'
import EditProjects from './components/EditProjects'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Projects />} />
    <Route path="/agregarproyectos" element={<CreateProjects />} />
    <Route path="/actualizar/:id/edit" element={<CreateProjects />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
