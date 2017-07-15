var express = require('express')
var router = express.Router()
var fs = require('fs')
var data = require('./data.json')

router.get('/', function (req, res) {
  res.render('questions/index')
})

router.get('/questions/:id', function (req, res) {
  var id = req.params.id
  var singleQuestion = data.trivias.find(function(question) {
    return question.id == id
  })
  res.render('questions/question', singleQuestion)
})

router.get('/results', function(req, res) {
  res.render('questions/results')
})

router.post('/questions/:id', function (req, res) {
  var id = parseInt(req.params.id)
  var answer = req.body.answer
  var singleQuestion = data.trivias.find(function(question) {
    return question.id == id + 1
  })

  if (singleQuestion == undefined) { //no next object
    res.redirect('/results')
  } else {

    res.redirect('/questions/' + (id+1))
  }
})









module.exports = router
