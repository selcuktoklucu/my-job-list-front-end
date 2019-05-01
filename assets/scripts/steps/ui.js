// const showTasksTemplate = require('../templates/book-listing.handlebars')
// const showStepsTemplate = require('../templates/step-listing.handlebars')
const tasksEvents = require('../tasks/events.js')
const timingDelay = 1500

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
  // Animation
  const originalValue = $('#btnSubmitNewStep').text()
  $('#btnSubmitNewStep').text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $('#btnSubmitNewStep').animate({opacity: 1}).css('background-color', 'Blue').text(originalValue)
  })
  // Animation complete.
}

const onDeleteStepSuccess = () => {
  $('#showMyList').trigger('click')
  tasksEvents.refreshSelectedTask()
  // console.log('delete step success')
}
const onDeleteStepFailure = () => {
  // Animation
  const originalValue = $('.deleteStep').text()
  $('.deleteStep').text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $('.deleteStep').animate({opacity: 1}).css('background-color', 'Blue').text(originalValue)
  })
  // Animation complete.
}
const onUpdateStepSuccess = () => {
  // console.log('Update step Success')
  $('#updateStepModal').modal('hide')
  tasksEvents.refreshSelectedTask()
}

const onUpdateStepFailure = () => {
  // Animation
  const originalValue = $('#btnUpdateTheStep').text()
  $('#btnUpdateTheStep').text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $('#btnUpdateTheStep').animate({opacity: 1}).css('background-color', 'Blue').text(originalValue)
  })
  // Animation complete.
}

module.exports = {
  onDeleteStepSuccess,
  onDeleteStepFailure,
  onAddStepSuccess,
  onAddStepFailure,
  onUpdateStepSuccess,
  onUpdateStepFailure
}
