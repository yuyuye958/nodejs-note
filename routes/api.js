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
router.post('note/create', (req, res, next) => {

})

// 编辑 note
router.post('note/edit', (req, res, next) => {

})

// 删除 note
router.post('note/delete', (req, res, next) => {

})

module.exports = router