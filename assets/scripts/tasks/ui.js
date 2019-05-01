'use strict'
const store = require('../store')
const showTasksTemplate = require('../templates/book-listing.handlebars')
const showStepsTemplate = require('../templates/step-listing.handlebars')
const api = require('./api.js')

const timingDelay = 1200

const onAddNewTask = () => {
  $('#newTaskFirstArea').val('')
  $('#newTaskSecondArea').val('')
  $('#newTaskThirdArea').val('')
  $('#showMyList').trigger('click')
  $('#newTaskModal').modal('hide')
  //
  $('#newModelTitle').text('Successfuly Added Task!').css('background-color', 'green').animate({
    opacity: 0.25
  }, timingDelay, () => {
    // Animation complete.
    $('#newModelTitle').animate({opacity: 1}).css('background-color', 'white').text('Add Task!')
  })
}

const onAddNewTaskFailure = () => {
  // Animation
  const originalValue = $('#btnSubmitNewTask').text()
  $('#btnSubmitNewTask').text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $('#btnSubmitNewTask').animate({opacity: 1}).css('background-color', 'Blue').text(originalValue)
  })
  // Animation complete.
}

const getTasksSuccess = data => {
  const showBooksHtml = showTasksTemplate({ tasks: data.tasks })
  $('#tasks-display').empty()
  // $('#tasks-display').empty()
  $('#tasks-display').append('<p style="color:white; font-weight: 600">Total tasks= ' + data.tasks.length + ' </p>')
  $('#tasks-display').append(`<Button id="btnNewTask" class="btn btn-primary" data-toggle="modal" data-target="#newTaskModal">New Task?</Button>    `)
  $('#tasks-display').append(showBooksHtml)
}

const getTasksFailure = () => {
  // alert('getTasksFailure')
}

const showTaskSuccess = data => {
  $('#tasks-detail-display').html(`
    <button class='btn btn-danger' id='deleteCurrentTask' data-id='${data.task.id}'>Remove the Task</button>
  <button class='btn btn-primary' id='btnUpdateTask' data-id='${data.task.id}' data-toggle="modal" data-target="#updateTaskModal">Update the task</button>
  <button class='btn btn-primary' id='btnNewStep' data-id='${data.task.id}' data-toggle="modal" data-target="#newStepModal">Add new step</button>
  `)
  store.currentTask = data.task.id
  $('#updateTaskFirstArea').val(data.task.title)
  $('#updateTaskSecondArea').val(data.task.description)
  $('#updateTaskThirdArea').val(data.task.due_date)
  const showStepsHtml = showStepsTemplate({ steps: data.task.steps })
  $('#tasks-detail-display').append(showStepsHtml)
}
const showTaskFailure = () => {
  // Animation
  const originalValue = $('.btnDetails').text()
  $('.btnDetails').text('Something Went Wrong').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $('.btnDetails').animate({opacity: 1}).css('background-color', 'Yellow').text(originalValue)
  })
  // Animation complete.
}
const onDeleteTaskSuccess = () => {
  $('#showMyList').trigger('click')
  $('#tasks-detail-display').empty()
  // Animation
  const originalValue = $('#deleteCurrentTask').text()
  $('#deleteCurrentTask').text('Success').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $('#deleteCurrentTask').animate({opacity: 1}).css('background-color', 'Red').text(originalValue)
  })
  // Animation complete.
}
const onDeleteTaskFailure = () => {
  // Animation
  const originalValue = $('#deleteCurrentTask').text()
  $('#deleteCurrentTask').text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $('#deleteCurrentTask').animate({opacity: 1}).css('background-color', 'Red').text(originalValue)
  })
  // Animation complete.
}

const onUpdateTaskSuccess = () => {
  $('#updateTaskModal').modal('hide')
  $('#showMyList').trigger('click')
  $('#updateModelTitle').text('Successfuly Updated!').css('background-color', 'green').animate({
    opacity: 0.25
  }, timingDelay, function () {
    // Animation complete.
    $('#updateModelTitle').animate({opacity: 1}).css('background-color', 'white').text('Update a task')
  })

  const id = store.currentTask
  api.showTaskDetails(id)
    .then(showTaskSuccess)
    .catch(showTaskFailure)
}

const onUpdateTaskFailure = () => {
  // Animation
  const originalValue = $('#btnUpdateTheTask').text()
  $('#btnUpdateTheTask').text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $('#btnUpdateTheTask').animate({opacity: 1}).css('background-color', 'Blue').text(originalValue)
  })
  // Animation complete.
}

module.exports = {
  getTasksSuccess,
  getTasksFailure,
  showTaskSuccess,
  onAddNewTask,
  onDeleteTaskSuccess,
  onDeleteTaskFailure,
  onUpdateTaskSuccess,
  onUpdateTaskFailure,
  showTaskFailure,
  onAddNewTaskFailure
}
