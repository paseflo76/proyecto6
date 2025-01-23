const Serie = require('../models/serie')

const getSeries = async (req, res, next) => {
  try {
    const series = await Serie.find()
    return res.status(200).json(series)
  } catch (error) {
    return res.status(400).json('error en la solicitud')
  }
}

const postSerie = async (req, res, next) => {
  try {
    const newSerie = new Serie(req.body)
    const serieSaved = await newSerie.save()
    return res.status(201).json(serieSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error al publicar')
  }
}

const updateSerie = async (req, res, next) => {
  try {
    const { id } = req.params

    const newSerie = new Serie(req.body)

    newSerie._id = id
    const serieUpdated = await Serie.findByIdAndUpdate(id, newSerie, {
      new: true
    })
    return res.status(200).json(serieUpdated)
  } catch (error) {
    return res.status(400).json('error al modificar')
  }
}
const deleteSerie = async (req, res, next) => {
  try {
    const { id } = req.params
    const serieDeleted = await Serie.findByIdAndDelete(id)
    return res.status(200).json({
      messade: 'Elemento eliminado',
      elemento: serieDeleted
    })
  } catch (error) {
    return res.status(400).json('error delete')
  }
}

module.exports = {
  getSeries,
  postSerie,
  updateSerie,
  deleteSerie
}
