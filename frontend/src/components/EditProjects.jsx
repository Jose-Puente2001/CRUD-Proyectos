import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjects, updateProjects } from '../api/projects_api.js';
import Button from '@mui/material/Button';
import { FormLabel } from '@mui/material';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    cliente: '',
    nombre_proyecto: '',
    country: '',
    estatus: '',
  });

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProjects(id);
        const projectData = response.data;
        setProject(projectData);
        setValue('cliente', projectData.cliente);
        setValue('nombre_proyecto', projectData.nombre_proyecto);
        setValue('country', projectData.country);
        setValue('estatus', projectData.estatus);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, [id, setValue]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const onSubmit = async (data) => {
    try {
      await updateProjects(id, data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Editar Proyecto</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <FormLabel>NOMBRE DEL CLIENTE</FormLabel>
            <TextField {...register('cliente')} defaultValue={project.cliente} onChange={handleInputChange} />
          </div>
          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <FormLabel>NOMBRE DEL PROYECTO</FormLabel>
            <TextField {...register('nombre_proyecto')} defaultValue={project.nombre_proyecto} onChange={handleInputChange} />
          </div>
          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <FormLabel>UBICACIÓN</FormLabel>
            <TextField {...register('country')} defaultValue={project.country} onChange={handleInputChange} />
          </div>
          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <FormLabel>ESTATUS</FormLabel>
            <TextField {...register('estatus')} defaultValue={project.estatus} onChange={handleInputChange} />
          </div>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '2rem' }}>
            Actualizar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditProject;