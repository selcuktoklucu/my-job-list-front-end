// const showTasksTemplate = require('../templates/book-listing.handlebars')
// const showStepsTemplate = require('../templates/step-listing.handlebars')
const tasksEvents = require('../tasks/events.js')

const onAddStepSuccess = () => {
  // console.log('Add step success')
  $('#newStepFirstArea').val('')
  $('#newStepSecondArea').val('')
  $('#newStepThirdArea').val('')
  $('#newStepModal').modal('hide')
  $('#showMyList').trigger('click')
  tasksEvents.refreshSelectedTask()
}

const onAddStepFailure = () => {
  // console.log('Add step Failure')
}

const onDeleteStepSuccess = () => {
  $('#showMyList').trigger('click')
  tasksEvents.refreshSelectedTask()
  // console.log('delete step success')
}
const onDeleteStepFailure = () => {
  // console.log('delete step failure')
}
const onUpdateStepSuccess = () => {
  // console.log('Update step Success')
  $('#updateStepModal').modal('hide')
  tasksEvents.refreshSelectedTask()
}

const onUpdateStepFailure = () => {
  // console.log('Update step failure')
}

module.exports = {
  onDeleteStepSuccess,
  onDeleteStepFailure,
  onAddStepSuccess,
  onAddStepFailure,
  onUpdateStepSuccess,
  onUpdateStepFailure
}
