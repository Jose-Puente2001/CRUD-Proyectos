import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { getProjects } from '../api/projects_api.js';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const loadProjects = async () => {
    const response = await getProjects();
    const result = response.data;
    setProjects(result);
  };
  
  useEffect(() => {
    loadProjects();
  }, []);


 const navigate = useNavigate()

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box width="80%" padding="16px">
        <h1 style={{ textAlign: 'center' }}>CRUD de Proyectos</h1>
        <Button onClick={()=> navigate('/agregarproyectos')}variant="contained" color="success">
          Agregar
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">NOMBRE DEL CLIENTE</TableCell>
                <TableCell align="right">NOMBRE DEL PROYECTO</TableCell>
                <TableCell align="right">UBICACIÓN</TableCell>
                <TableCell align="right">ESTATUS DEL PROYECTO</TableCell>
                <TableCell align="right">EDITAR</TableCell>
                <TableCell align="right">ELIMINAR</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((data) => (
                <TableRow key={data.id}>
                  <TableCell component="th" scope="row">{data.id}</TableCell>
                  <TableCell align="right">{data.cliente}</TableCell>
                  <TableCell align="right">{data.nombre_proyecto}</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">{data.estatus}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="warning" startIcon={<EditIcon />}>
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Projects;