import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { addProjects, getProjectById, updateProjects  } from '../api/projects_api.js';
import Swal from 'sweetalert2';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import withReactContent from 'sweetalert2-react-content';
import { Link, useParams,useNavigate } from 'react-router-dom';

const CreateProjects = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [project, setProject] = useState({
    cliente: "",
    nombre_proyecto: "",
    country: "",
    estatus: ""
  });

  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setProject((prevProject) => ({
    ...prevProject,
    [name]: value
  }));
};

  const onSubmit = async (data) => {
    setEditing(true);
    if (params.id) {
      const response = await updateProjects(params.id, data)
    } else {
      const response = await addProjects(data);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <p>Proyecto Agregado Exitosamente</p>,
        icon: 'success',
      });
    }
    reset();
  };

  const loadProjects = async (id) => {
    const response = await getProjectById(id);
    const result = response.data;
    setProject({
      cliente: result.cliente,
      nombre_proyecto: result.nombre_proyecto,
      country: result.country,
      estatus: result.estatus
    });
  };

  useEffect(() => {
    if (params.id) {
      loadProjects(params.id);
    }
  }, [params.id]);

  return (
    <>
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '2rem', marginLeft: '5rem' }} onClick={()=> navigate('/')}>INICIO</Button>
      <h1 style={{ textAlign: 'center' }}>
        {params.id ? "Editar Proyecto" : "Crear Proyecto"}
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <FormLabel>NOMBRE DEL CLIENTE</FormLabel>
            <div>
              <TextField
                value={project.cliente}
                {...register('cliente', {
                  onChange: handleInputChange,
                  required: {
                    value: true,
                    message: 'El nombre del cliente es requerido',
                  },
                  minLength: {
                    value: 3,
                    message: 'El nombre del cliente debe tener al menos 3 caracteres',
                  },
                })}
              />
            </div>
            {errors.cliente && <span>{errors.cliente.message}</span>}
          </div>

          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <FormLabel>NOMBRE DEL PROYECTO</FormLabel>
            <div>
              <TextField
                value={project.nombre_proyecto}
                {...register('nombre_proyecto', {
                  onChange: handleInputChange,
                  required: {
                    value: true,
                    message: 'El nombre del proyecto es requerido',
                  },
                  minLength: {
                    value: 3,
                    message: 'El nombre del proyecto debe tener al menos 3 caracteres',
                  },
                })}
              />
            </div>
            {errors.nombre_proyecto && (
              <span>{errors.nombre_proyecto.message}</span>
            )}
          </div>

          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <FormLabel>UBICACIÓN</FormLabel>
            <div>
              <TextField
                value={project.country}
                {...register('country', {
                  onChange: handleInputChange,
                  required: {
                    value: true,
                    message: 'La ubicación del proyecto es requerida',
                  },
                  minLength: {
                    value: 3,
                    message: 'La ubicación del proyecto debe tener al menos 3 caracteres',
                  },
                })}
              />
              {errors.country && (
                <span>{errors.country.message}</span>
              )}
            </div>
          </div>
          {params.id && (
            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
              <FormLabel>ESTATUS</FormLabel>
              <div>
                <Select
                  value={project.estatus}
                  {...register('estatus', {
                    onChange: handleInputChange,
                    required: {
                      value: true,
                      message: 'El estatus del proyecto es requerido',
                    },
                    minLength: {
                      value: 3,
                      message: 'Elnombre del proyecto debe tener al menos 3 caracteres',
                    },
                  })}
                  >
                   <MenuItem value="EN CURSO">EN CURSO</MenuItem>
                  <MenuItem value="FINALIZADO">FINALIZADO</MenuItem>
                </Select>
                {errors.estatus && (
                  <span>{errors.estatus.message}</span>
                )}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '2rem' }}>
              {params.id ? 'Actualizar Proyecto' : 'Agregar nuevo Proyecto'}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProjects;

