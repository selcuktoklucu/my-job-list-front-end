// All clicks will be here to handle front end
const api = require('./api.js')
// const gEn = require('../gameEngine.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui.js')
// const app = require('../app.js')
const store = require('../store')

// let currentTurn = 'X'

const onGetTasks = function (event) {
  event.preventDefault()
  console.log('event is ' + event)
  // const data = getFormFields(event.target)
  console.log('Hey I am on register function! Token is: ' + store.user.token)
  api.getTasks() // removed data from paramers, because I'm getting token directly
    .then(ui.getTasksSuccess)
    .catch(ui.getTasksFailure)
}

const refreshSelectedTask = () => {
  const id = store.currentTask
  api.showTaskDetails(id)
    .then(ui.showTaskSuccess)
    .catch(ui.failure)
}

const onDetails = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  store.currentTask = id
  // console.log(id)
  console.log('Hey You clicked the on details of ' + id)
  api.showTaskDetails(id)
    .then(ui.showTaskSuccess)
    // .then(() => onGetBooks(event))
    // refreshing the DOM
    .catch(ui.failure)
}

const onNewTask = (event) => {
  event.preventDefault()
  api.addNewTask()
    .then(ui.onAddNewTask)
    .catch()
}

const onDeleteTask = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log('remove ' + id)
  api.deleteTask(id)
    .then(ui.onDeleteTaskSuccess)
    .catch(ui.onDeleteTaskFailure)
}

const onUpdateTheTask = () => {
  event.preventDefault()
  console.log('Update The TASK!' + store.currentTask)
  const id = store.currentTask
  api.updateTask(id)
    .then(ui.onUpdateTaskSuccess)
    .catch(ui.onUpdateTaskFailure)
  // console.log($('#taskDetailTitle').val())
  // $('#updateTaskFirstArea').val()
  // $('#updateTaskThirdArea').val($('#taskDetailDescription').val())
}

const addHandlers = function () {
  $('#showMyList').on('click', onGetTasks)
  $('#tasks-display').on('click', '.btnDetails', onDetails)
  $('#btnSubmitNewTask').on('click', onNewTask)
  $('#tasks-detail-display').on('click', '#deleteCurrentTask', onDeleteTask)
  $('#btnUpdateTheTask').on('click', onUpdateTheTask)
  //
  // $('#tasks-detail-display').on('click', '#deleteStep', onDeleteStep)
  // console.log('I am at events.js!, jquery passed me from app js')
  // $('.box').on('click', onClickBox)
  // $('#formSignIn').on('submit', onSignIn)
  // $('#form-change-password').on('submit', onChangePassword)
  // $('#formSignOut').on('submit', onSignOut)
  // $('#btnShowSignUpIn').on('click', toggleSignUpIn)
}
module.exports = {
  addHandlers,
  onGetTasks,
  refreshSelectedTask
}
