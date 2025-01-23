const Plataformas = require('../models/plataforma')

const getPlataformas = async (req, res, next) => {
  try {
    const plataformas = await Plataformas.find().populate('series')
    return res.status(200).json(plataformas)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const getPlataformaByid = async (req, res, next) => {
  try {
    const plataforma = await Plataformas.findById(id).populate('series')
    return res.status(200).json(plataforma)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataformas(req.body)
    const plataformaSaved = await newPlataforma.save()
    return res.status(201).json(plataformaSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error')
  }
}

const updatePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldPlataforma = await Plataformas.findById(id)
    const newPlataforma = new Plataformas(req.body)
    newPlataforma._id = id
    newPlataforma.series = [...oldPlataforma.series, ...req.body.series]
    const plataformaUpdated = await Plataformas.findByIdAndUpdate(
      id,
      newPlataforma,
      {
        new: true
      }
    )
    return res.status(200).json(plataformaUpdated)
  } catch (error) {
    return res.status(400).json('error')
  }
}
const plataformadelete = async (req, res, next) => {
  try {
    const { id } = req.params
    const plataformaDeleted = await Plataformas.findByIdAndDelete(id)
    return res.status(200).json({
      messade: 'Elemento eliminado',
      elemento: plataformaDeleted
    })
  } catch (error) {
    return res.status(400).json('error')
  }
}

module.exports = {
  getPlataformas,
  postPlataforma,
  updatePlataforma,
  getPlataformaByid,
  plataformadelete
}
