require('dotenv').config()
const express = require('express')
const seriesRouter = require('./src/api/routes/serie')
const plataformasRouter = require('./src/api/routes/plataforma')
const { connectDB } = require('./src/config/db')

const app = express()

app.use(express.json())

connectDB()

//! linea para configurar que mi servidor sea capaz de recoger datos en formato json

app.use('/api/v1/series', seriesRouter)
app.use('/api/v1/series', plataformasRouter)

// todas las rutas que no tengan respuesta entrarán por aquí
app.use('/saludar', (req, res, next) => {
  return res.status(200).json('Hola')
})

app.use('*', (rep, res, next) => {
  return res.status(404).json('route not found')
})

app.listen(3000, () => {
  console.log(' servidor levantado en: http://localhost:3000')
})
