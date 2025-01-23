const {
  getSeries,
  postSerie,
  updateSerie,
  deleteSerie
} = require('../controller/serie')

const seriesRouter = require('express').Router()

seriesRouter.get('/', getSeries)
seriesRouter.post('/', postSerie)
seriesRouter.put('/:id', updateSerie)
seriesRouter.delete('/:id', deleteSerie)

module.exports = seriesRouter
