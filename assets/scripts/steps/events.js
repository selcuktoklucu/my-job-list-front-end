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
  event.preventDefault()
  const id = $(event.target).data('id')
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
  }).catch(ui.onUpdateStepFailure)
}

const onUpdateTheStepFromForm = () => {
  event.preventDefault()
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
