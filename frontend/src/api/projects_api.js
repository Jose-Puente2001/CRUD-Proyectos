import axios from 'axios';

export const getProjects = async() => {
	return await axios.get('http://localhost:3000/api/proyectos/')
}

export const getProjectById = async(id) => {
	return await axios.get(`http://localhost:3000/api/proyectos/${id}`)
}


export const addProjects = async(project) => {
	return await axios.post('http://localhost:3000/api/agregarproyectos/', project)
}

export const deleteProjects = async(id) => {
	return await axios.delete(`http://localhost:3000/api/eliminarproyectos/${id}`)
}

export const updateProjects = async (id, project) => {
  await axios.put(`http://localhost:3000/api/actualizarproyectos/${id}`, project);
}