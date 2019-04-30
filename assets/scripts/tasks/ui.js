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
  }, timingDelay, function () {
    // Animation complete.
    $('#newModelTitle').animate({opacity: 1}).css('background-color', 'white').text('Add Task!')
  })
}

const getTasksSuccess = function (data) {
  const showBooksHtml = showTasksTemplate({ tasks: data.tasks })
  $('#tasks-display').empty()
  // $('#tasks-display').empty()
  $('#tasks-display').append('<p style="color:white; font-weight: 600">Total tasks= ' + data.tasks.length + ' </p>')
  $('#tasks-display').append(`<Button id="btnNewTask" class="btn btn-primary" data-toggle="modal" data-target="#newTaskModal">New Task?</Button>    `)
  $('#tasks-display').append(showBooksHtml)
}

const getTasksFailure = function () {
  // alert('getTasksFailure')
}

const showTaskSuccess = (data) => {
  $('#tasks-detail-display').html(`
    <p style="color:white; font-weight: 600" id='taskDetailId'>Task ID: ${data.task.id}</p>
    <p style="color:white; font-weight: 600" id='taskDetailTitle'>Title: ${data.task.title}</p>
    <p style="color:white; font-weight: 600" id='taskDetailDescription'>Description: ${data.task.description}</p>
    <p style="color:white; font-weight: 600" id='taskDetailDueDate'>Due Date: ${data.task.due_date}</p>
    <button class='btn btn-danger' id='deleteCurrentTask' data-id='${data.task.id}'>Remove the Task</button>
    <button class='btn btn-primary' id='btnUpdateTask' data-id='${data.task.id}' data-toggle="modal" data-target="#updateTaskModal">Update the task</button>
    <button class='btn btn-primary' id='btnNewStep' data-id='${data.task.id}' data-toggle="modal" data-target="#newStepModal">Add new step</button>
    <br>
    `
  )
  store.currentTask = data.task.id
  $('#updateTaskFirstArea').val(data.task.title)
  $('#updateTaskSecondArea').val(data.task.description)
  $('#updateTaskThirdArea').val(data.task.due_date)

  // $('#tasks-display').append(`<Button id="btnNewTask" class="btn btn-primary" data-toggle="modal" data-target="#newTaskModal">New Task?</Button>    `)
  // console.log('@tasks/ui.js the data is: ' + JSON.stringify(data.task.steps, null, 2) + data)
  const showStepsHtml = showStepsTemplate({ steps: data.task.steps })
  $('#tasks-detail-display').append(showStepsHtml)
}
const showTaskFailure = () => {
  console.log('failure')
}
const onDeleteTaskSuccess = () => {
  console.log('Delete Task success')
  $('#showMyList').trigger('click')
  $('#tasks-detail-display').empty()
  // Add renew the first section command.
}
const onDeleteTaskFailure = () => {
  console.log('delete step failure')
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
  // console.log('updateTaskfailure')
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
  showTaskFailure
}
