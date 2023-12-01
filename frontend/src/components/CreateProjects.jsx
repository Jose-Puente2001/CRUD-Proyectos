import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { addProjects } from '../api/projects_api.js';
import MapView from './MapView';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

const CreateProjects = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await addProjects(data);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Proyecto Agregado Exitosamente</p>,
      icon: "success",
    });

    reset();
  };

  return (
    <>
     <Link to="/">Inicio</Link>
      <h1 style={{ textAlign: 'center' }}>Crear Proyecto</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '1rem', textAlign: 'center'}}>
            <FormLabel>NOMBRE DEL CLIENTE</FormLabel>
            <div>
              <TextField
                {...register('cliente', {
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
                {...register('nombre_proyecto', {
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

          <FormLabel>UBICACIÓN</FormLabel>
          <MapView />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '2rem'}}>
              Agregar nuevo Proyecto
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProjects;