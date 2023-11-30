import express from 'express'
import cors from 'cors'
import { connection } from './db.js'
import projectsroutes from './routes/projectsroutes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', projectsroutes)

app.listen(3000)