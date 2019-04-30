'use strict'
const store = require('../store')
// const gameEvents = require('../games/events.js')
// const app = require('../app.js')
// const events = require('./events.js')
// const timingDelay = 1501
// const imgSrc = 'https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/128/Google_Maps.png'
const showTasksTemplate = require('../templates/book-listing.handlebars')
const showStepsTemplate = require('../templates/step-listing.handlebars')
// const events = require('./events.js')
// const ui = require('./ui.js')
const api = require('./api.js')
// const appjs = require('../store.js')

const onAddNewTask = () => {
  $('#newTaskFirstArea').val('')
  $('#newTaskSecondArea').val('')
  $('#newTaskThirdArea').val('')
  $('#showMyList').trigger('click')
  $('#newTaskModal').modal('hide')
  window.setTimeout(function () {
    $('#success-alert').alert('close')
  }, 2000)
  // })
  // event.getTasks() renew function should be here.
}

const getTasksSuccess = function (data) {
  const showBooksHtml = showTasksTemplate({ tasks: data.tasks })
  // console.log('get Tasks success!' + data)
  $('#tasks-display').empty()
  $('#tasks-display').append('Total tasks= ' + data.tasks.length + ' ')
  $('#tasks-display').append(`<Button id="btnNewTask" class="btn btn-primary" data-toggle="modal" data-target="#newTaskModal">New Task?</Button>    `)
  // $('#btnNewTask').on('click', onAddNewTask)
  $('#tasks-display').append(showBooksHtml)
  // data.tasks.forEach(function (task) {
  // console.log(task.id)
  // <<<<<<<<<<<<< Card start
  // $('#tasks-display').append(`
  //   <p>Task ID: ${task.id}</p>
  //   <p>Description: ${task.description}</p>
  //   <p>Due Date: ${task.due_date}</p>
  //   <p>Number of steps: ${task.steps.length}</p>
  //   <p>     first step: ${JSON.stringify(task.steps[0], null, 2)}</p>
  //   <div class="card" style="width: 18rem;">
  //     <img src="${imgSrc}" class="card-img-top" alt="...">
  //     <div class="card-body">
  //       <h5 class="card-title">${task.id} ${task.description}</h5>
  //       <p class="card-text">There Are ${task.steps.length} to see!${JSON.stringify(task.steps[0], null, 2)}</p>
  //       <a href="#" class="btn btn-primary">Show more!</a>
  //     </div>
  //   </div>
  //   <br>
  //   `
  // )
  // <<<<<<<<<<<<<<<< Card end
  // })
}

const getTasksFailure = function () {
  alert('getTasksFailure')
}

const showTaskSuccess = (data) => {
  $('#tasks-detail-display').html(`
    <p id='taskDetailId'>Task ID: ${data.task.id}</p>
    <p id='taskDetailTitle'>Title: ${data.task.title}</p>
    <p id='taskDetailDescription'>Description: ${data.task.description}</p>
    <p id='taskDetailDueDate'>Due Date: ${data.task.due_date}</p>
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
  // const id = store.currentTask

  // refresh details
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
