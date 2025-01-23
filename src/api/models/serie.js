const mongoose = require('mongoose')

const serieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    seasons: { type: Number, required: true },
    categories: [
      {
        type: String,
        enum: [
          'Aventuras',
          'Accion',
          'Crimen',
          'Drama',
          'Ciencia Fincion',
          'Fantasia',
          'Suspense',
          'Comedia'
        ]
      }
    ]
  },
  {
    timestamps: true
  }
)

const Serie = mongoose.model('series', serieSchema, 'series')

module.exports = Serie
