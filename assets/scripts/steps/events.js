const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onDeleteStep = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  // console.log('remove step' + id)
  api.deleteStep(id)
    .then(ui.onDeleteStepSuccess)
    .catch(ui.onDeleteStepFailure)
}

const onNewStep = (event) => {
  // console.log('store.currentTask is ' + store.currentTask)
  // ;
  event.preventDefault()
  const id = $(event.target).data('id')
  // console.log('Add new Step to Task of ' + id)
  api.addStep(id)
    .then(ui.onAddStepSuccess)
    .catch(ui.onAddStepFailure)
}

const onUpdateStep = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  // console.log('Update a Step id of: ' + id + 'stepname ')
  // $('#updateStepModal').
  api.getStep(id).then(function (successData) {
    $('#updateStepFirstArea').val(successData.step.name)
    $('#updateStepSecondArea').val(successData.step.color)
    $('#updateStepThirdArea').val(successData.step.url)
    store.currentStep = id
  }).catch()
  // updateStepFirstArea
  // $('#updateStepFirstArea').val($(event.target).data.step.name)
  // $('#updateStepSecondArea').val($(event.target).data.step.color)
  // $('#updateStepThirdArea').val($(event.target).data.step.url)
}

// const setUpdateModalStuff = (id) => {
//   $('#updateTaskFirstArea').val(data.task.title)
//   $('#updateTaskSecondArea').val(data.task.description)
//   $('#updateTaskThirdArea').val(data.task.due_date)
// }

const onUpdateTheStepFromForm = () => {
  event.preventDefault()
  // console.log('Update The STEP SUBMiT!' + store.currentStep)
  const id = store.currentStep
  api.updateStep(id)
    .then(ui.onUpdateStepSuccess)
    .catch(ui.onUpdateStepFailure)
}

const addHandlers = function () {
  $('#tasks-detail-display').on('click', '.deleteStep', onDeleteStep)
  $('#addStepToCurrentTask').on('click')
  $('#btnSubmitNewStep').on('click', onNewStep)
  $('#tasks-detail-display').on('click', '.updateStepOnHandleBar', onUpdateStep)
  $('#btnUpdateTheStep').on('click', onUpdateTheStepFromForm)
}

module.exports = {
  addHandlers
}
