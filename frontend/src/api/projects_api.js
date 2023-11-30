import axios from 'axios';

export const getProjects = async() => {
	return await axios.get('http://localhost:3000/api/proyectos/')
}