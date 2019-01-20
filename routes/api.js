var express = require('express')
var router = express.Router()
var Note = require('../model/note').Note

// 获取所有 notes
router.get('/notes', (req, res, next) => {
  Note.findAll({raw: true}).then((notes) => {
    res.send({status: 0, data: notes})
  })
})

// 创建 note
router.post('/notes/add', (req, res, next) => {
  Note.create({text: req.body.note}).then(() => {
    res.send({status: 0})
  }).catch(() => {
    res.send({status: 1, errorMsg: '数据库发生错误'})
  })
})

// 编辑 note
router.post('/notes/edit', (req, res, next) => {
  Note.update(
      {text: req.body.note},
      {where: {id: req.body.id}}
  ).then(() => {
    res.send({status: 0})
  })
})

// 删除 note
router.post('/notes/delete', (req, res, next) => {
  Note.destroy({where: {id: req.body.id}}).then(() => {
    res.send({status: 0})
  })
})

module.exports = router