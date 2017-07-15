var test = require('tape')
var request = require('supertest')
var cheerio = require("cheerio")
var server = require('../server')
var route = require('../routes')
var data = require("../data.json")

var fs = require('fs')




test('test is working', function(t){
    t.pass()
    t.end()
})

test('checking if questions/1 is returning first question', function(t) {
request(server)
.get('/questions/1')
.end(function(err, res) {
  var $ =cheerio.load(res.text)
  var expected = "What food is Hummus made from?"
  var actual = $("h3").text()
  t.equal(actual, expected)
  t.end()
})
})
