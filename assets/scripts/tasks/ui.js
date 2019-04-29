'use strict'
// const store = require('../store')
// const gameEvents = require('../games/events.js')
// const api = require('./api.js')
// const event = require('./events.js')
// const timingDelay = 1501
// const imgSrc = 'https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/128/Google_Maps.png'
const showTasksTemplate = require('../templates/book-listing.handlebars')
const showStepsTemplate = require('../templates/step-listing.handlebars')

const onAddNewTask = () => {
  console.log('heyy')
  console.log('onNewTask YAY')
  $('#newTaskFirstArea').val('')
  $('#newTaskSecondArea').val('')
  $('#newTaskThirdArea').val('')

  // event.getTasks() renew function should be here.
}

const getTasksSuccess = function (data) {
  const showBooksHtml = showTasksTemplate({ tasks: data.tasks })
  console.log('get Tasks success!' + data)
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
    <p>Task ID: ${data.task.id}</p>
    <p>Description: ${data.task.description}</p>
    <p>Due Date: ${data.task.due_date}</p>
    <button class='btn btn-danger' id='deleteCurrentTask' data-id='${data.task.id}'>Remove the Task</button>
    <br>
    `
  )
  // console.log('@tasks/ui.js the data is: ' + JSON.stringify(data.task.steps, null, 2) + data)
  const showStepsHtml = showStepsTemplate({ steps: data.task.steps })
  $('#tasks-detail-display').append(showStepsHtml)
}

const onDeleteTaskSuccess = () => {
  console.log('Delete book success')
  // Add renew the first section command.
}
const onDeleteTaskFailure = () => {
  console.log('delete Book failure')
}

module.exports = {
  getTasksSuccess,
  getTasksFailure,
  showTaskSuccess,
  onAddNewTask,
  onDeleteTaskSuccess,
  onDeleteTaskFailure

}
