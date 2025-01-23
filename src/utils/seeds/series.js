const mongoose = require('mongoose')
const Serie = require('../../api/models/serie')
const series1 = require('../../data/series')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://series:THX1PaRzU63pJPsV@cluster0.qmpgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Serie.collection.drop()
    console.log('series eliminadas')

    await Serie.insertMany(series1)
    console.log('series introducidas')

    await mongoose.disconnect()
    console.log('desconectado de la BBDD ')
  } catch (error) {
    console.log('error algo salio mal:', error)
  }
}
lanzarSemilla()
