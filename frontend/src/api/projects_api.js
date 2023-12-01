import axios from 'axios';

export const getProjects = async() => {
	return await axios.get('http://localhost:3000/api/proyectos/')
}

export const addProjects = async(project) => {
	return await axios.post('http://localhost:3000/api/agregarproyectos/', project)
}