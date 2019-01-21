var express = require('express')
var router = express.Router()
var Note = require('../model/note').Note

// 获取所有 notes
router.get('/notes', (req, res, next) => {
  let query = {raw: true}
  if (!req.session.user) {
    query.where = {
      uid: req.session.user.id
    }
  }

  Note.findAll(query).then((notes) => {
    res.send({status: 0, data: notes})
  })
})

// 创建 note
router.post('/notes/add', (req, res, next) => {
  if (!req.session.user) {
    return res.send({status: 1, errorMsg: '请先登录'})
  }

  Note.create({text: req.body.note, uid: req.session.user.id}).then(() => {
    res.send({status: 0})
  }).catch(() => {
    res.send({status: 1, errorMsg: '创建数据库发生错误'})
  })
})

// 编辑 note
router.post('/notes/edit', (req, res, next) => {
  if (!req.session.user) {
    return res.send({status: 1, errorMsg: '请先登录'})
  }

  Note.update(
      {text: req.body.note},
      {
        where: {
          id: req.body.id,
          uid: req.session.user.id
        }
      }
  ).then(() => {
    res.send({status: 0})
  }).catch(() => {
    res.send({status: 1, errorMsg: '修改数据库发生错误'})
  })
})

// 删除 note
router.post('/notes/delete', (req, res, next) => {
  if (!req.session.user) {
    return res.send({status: 1, errorMsg: '请先登录'})
  }

  Note.destroy({
    where: {
      id: req.body.id,
      uid: req.session.user.id
    }
  }).then(() => {
    res.send({status: 0})
  }).catch(() => {
    res.send({status: 1, errorMsg: '删除数据库发生错误'})
  })
})

module.exports = router