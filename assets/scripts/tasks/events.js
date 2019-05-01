const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onGetTasks = function (event) {
  event.preventDefault()
  api.getTasks() // removed data from paramers, because I'm getting token directly
    .then(ui.getTasksSuccess)
    .catch(ui.getTasksFailure)
}

const refreshSelectedTask = () => {
  const id = store.currentTask
  api.showTaskDetails(id)
    .then(ui.showTaskSuccess)
    .catch(ui.showTaskFailure)
}

const onDetails = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  store.currentTask = id
  api.showTaskDetails(id)
    .then(ui.showTaskSuccess).catch(ui.showTaskFailure)
}

const onNewTask = (event) => {
  event.preventDefault()
  api.addNewTask()
    .then(ui.onAddNewTask)
    .catch(ui.onAddNewTaskFailure)
}

const onDeleteTask = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteTask(id)
    .then(ui.onDeleteTaskSuccess)
    .catch(ui.onDeleteTaskFailure)
}

const onUpdateTheTask = () => {
  event.preventDefault()
  const id = store.currentTask
  api.updateTask(id)
    .then(ui.onUpdateTaskSuccess)
    .catch(ui.onUpdateTaskFailure)
}

const addHandlers = function () {
  $('#showMyList').on('click', onGetTasks)
  $('#tasks-display').on('click', '.btnDetails', onDetails)
  $('#btnSubmitNewTask').on('click', onNewTask)
  $('#tasks-detail-display').on('click', '#deleteCurrentTask', onDeleteTask)
  $('#btnUpdateTheTask').on('click', onUpdateTheTask)
}
module.exports = {
  addHandlers,
  onGetTasks,
  refreshSelectedTask
}
