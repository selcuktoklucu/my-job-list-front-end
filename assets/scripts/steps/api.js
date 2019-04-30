
const config = require('../config')
const store = require('../store')

const deleteStep = function (id) {
  console.log('steps/Api.js id is : ' + id)
  return $.ajax({
    url: config.apiUrl + `/steps/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // we are deleting the token on api to sign out. thats why it has delete tag
    }
  })
}

const getStep = function (id) {
  return $.ajax({
    url: config.apiUrl + `/steps/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // we are deleting the token on api to sign out. thats why it has delete tag
    }
  })
}

// ,
// success: function (data) {
//   $.parseJSON(data)
// }
const addStep = function (data) {
  console.log('steps/apiJs addNewStep')
  return $.ajax({
    url: config.apiUrl + '/steps/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'step': {
        'name': $('#newStepFirstArea').val(),
        'color': $('#newStepSecondArea').val(),
        'url': $('#newStepThirdArea').val(),
        'task_id': store.currentTask // <<< ganna be fixed
      }
    }
  })
}

const updateStep = (id) => {
  console.log('step/UI.js update step')
  return $.ajax({
    url: config.apiUrl + `/steps/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'step': {
        'name': $('#updateStepFirstArea').val(),
        'color': $('#updateStepSecondArea').val(),
        'url': $('#updateStepThirdArea').val() // <<< ganna be fixed
      }
    }
  })
}

module.exports = {
  deleteStep,
  addStep,
  getStep,
  updateStep
}
