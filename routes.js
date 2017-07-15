var express = require('express')
var router = express.Router()
var fs = require('fs')
var data = require('./data.json')

router.get('/', function (req, res) {
  res.render('questions/index')
})

router.get('/questions/:id', function (req, res) {
  var id= req.params.id
  var singleQuestion= data.trivias.find(function(question) {
    return question.id == id
  })
  res.render('questions/question', singleQuestion)
})

router.post('/questions/:id', function (req, res){
  var id= req.params.id
  var answer= req.body.answer
  var singleQuestion= data.trivias.find(function(question) {
    return question.id == id
  })
  var result= singleQuestion.result
  if(answer == result)
  res.render('questions/correct')
  else {
    res.render('questions/wrong')
  }
})




module.exports = router
