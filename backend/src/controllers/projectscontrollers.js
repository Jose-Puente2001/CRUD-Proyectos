import { connection } from '../db.js'

export const getProjects = async (req, res) => {

  const [rows] = await connection.query("SELECT * FROM project");
  res.json(rows)

}

export const addProjects = async (req, res) => {
 
 const {cliente, nombre_proyecto} = req.body
 const [rows] = await connection.query("INSERT INTO project(cliente, nombre_proyecto) VALUES(?, ?)", 
 [cliente, nombre_proyecto]
  );


}

export const updateProjects = async (req, res) => {

const {id} = req.params
const {cliente, nombre_proyecto} = req.body
const [result] = await connection.query("UPDATE project SET cliente = ?, nombre_proyecto = ? WHERE id = ?", [cliente, nombre_proyecto, id])
}

export const deleteProjects = async (req, res) => {

const [result] = await connection.query("DELETE FROM project WHERE id = ?", [req.params.id])

}