const Sequelize = require('sequelize')
const path = require('path')

const sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database/database.sqlite')
})

// sequelize
//     .authenticate()
//     .then(() => {
//       console.log('Connection has been established successfully.')
//     })
//     .catch(err => {
//       console.error('Unable to connect to the database:', err)
//     })

const Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  }
})

// // 创建
// // force: true will drop the table if it already exists
// Note.sync().then(() => {
//   // Table created
//   return Note.create({
//     text: 'hello'
//   })
// })
//
// // 查询
// Note.findAll({raw: true}).then(notes => {
//   console.log(notes)
// })

// Note.findAll({raw: true, where: {id: 3}}).then(notes => {
//   console.log(notes)
// })

module.exports.Note = Note