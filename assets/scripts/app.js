'use strict'
const userEvents = require('./auth/events.js')
const taskEvents = require('./tasks/events.js')
const stepEvents = require('./steps/events.js')
const threeJS = require('./three.js')
// use require with a reference to bundle the file and use it in this file
// const store = require('./store')
// const taskUi = require('./tasks/ui.js')
// const taskApi = require('./tasks/api.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// const refreshSelectedTask = () => {
//   const id = store.currentTask
//   taskApi.showTaskDetails(id)
//     .then(taskUi.showTaskSuccess)
//     .catch(taskUi.failure)
// }

$(() => {
  userEvents.addHandlers()
  taskEvents.addHandlers()
  stepEvents.addHandlers()
  threeJS.addHandlers()
  // your JS code goes here
  $('#playAgain').hide()
  $('#formSignUp').hide()
  $('#form-change-password').hide()
  $('#btn-Signout').hide()
  $('#btn-ShowGameRecords').hide()
  $('#exampleModal').modal('show')
  $(document).ready(function () {
    $('#success-alert').hide()
  })
})

// module.exports = refreshSelectedTask
