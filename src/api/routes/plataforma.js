const {
  getPlataformas,
  postPlataforma,
  updatePlataforma,
  plataformadelete,
  getPlataformaByid
} = require('../controller/plataforma')

const plataformasRouter = require('express').Router()

plataformasRouter.get('/', getPlataformas)
plataformasRouter.get('/', getPlataformaByid)
plataformasRouter.post('/', postPlataforma)
plataformasRouter.put('/:id', updatePlataforma)
plataformasRouter.delete('/:id', plataformadelete)

module.exports = plataformasRouter
