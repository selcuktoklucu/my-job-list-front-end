'use strict'
const userEvents = require('./auth/events.js')
const taskEvents = require('./tasks/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  userEvents.addHandlers()
  taskEvents.addHandlers()
  // your JS code goes here
  $('#playAgain').hide()
  $('#formSignUp').hide()
  $('#form-change-password').hide()
  $('#btn-Signout').hide()
  $('#btn-ShowGameRecords').hide()
})
