import { Router } from 'express'
import { getProjects, addProjects, updateProjects, deleteProjects, getProjectById } from '../controllers/projectscontrollers.js'


const router = Router()

router.get('/proyectos', getProjects)
router.get('/proyectos/:id', getProjectById)
router.post('/agregarproyectos', addProjects)
router.put('/actualizarproyectos/:id', updateProjects)
router.delete('/eliminarproyectos/:id', deleteProjects)

export default router