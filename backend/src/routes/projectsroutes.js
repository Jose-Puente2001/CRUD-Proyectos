import { Router } from 'express'
import { getProjects, addProjects, updateProjects, deleteProjects } from '../controllers/projectscontrollers.js'


const router = Router()

router.get('/proyectos', getProjects)
router.post('/agregarproyectos', addProjects)
router.put('/actualizarproyectos/:id', updateProjects)
router.delete('/eliminarproyectos/:id', deleteProjects)

export default router