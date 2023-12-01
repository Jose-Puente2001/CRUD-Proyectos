import { connection } from '../db.js'

export const getProjects = async (req, res) => {

  const [rows] = await connection.query("SELECT * FROM project");
  res.json(rows)

}

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  const [rows] = await connection.query("SELECT * FROM project WHERE id = ?", [id]);
  res.json(rows[0]);
};

export const addProjects = async (req, res) => {
 
 const {cliente, nombre_proyecto, country} = req.body
 const [rows] = await connection.query("INSERT INTO project(cliente, nombre_proyecto, country) VALUES(?, ?, ?)", 
 [cliente, nombre_proyecto, country]
  );


}

export const updateProjects = async (req, res) => {

const {id} = req.params
const {cliente, nombre_proyecto, country, estatus} = req.body
const [result] = await connection.query("UPDATE project SET cliente = ?, nombre_proyecto = ?, country = ?, estatus = ? WHERE id = ?", [cliente, nombre_proyecto, country, estatus, id])
}

export const deleteProjects = async (req, res) => {

const [result] = await connection.query("DELETE FROM project WHERE id = ?", [req.params.id])

}