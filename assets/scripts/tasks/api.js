
const config = require('../config')
const store = require('../store')

const getTasks = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tasks/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showTaskDetails = function (id) {
  // console.log('called tasks/api showTaskDetails')
  return $.ajax({
    url: config.apiUrl + `/tasks/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addNewTask = function (data) {
  console.log('task/apiJs addNewTask')
  return $.ajax({
    url: config.apiUrl + '/tasks/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'task': {
        'title': $('#newTaskFirstArea').val(),
        'description': $('#newTaskSecondArea').val(),
        'due_date': $('#newTaskThirdArea').val() // <<< ganna be fixed
      }
    }
  })
}

const deleteTask = function (id) {
  console.log('tasks/Api.js id is : ' + id)
  return $.ajax({
    url: config.apiUrl + `/tasks/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // we are deleting the token on api to sign out. thats why it has delete tag
    }
  })
}

const updateTask = (id) => {
  console.log('tasks/UI.js update task')
  return $.ajax({
    url: config.apiUrl + `/tasks/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'task': {
        'title': $('#updateTaskFirstArea').val(),
        'description': $('#updateTaskSecondArea').val(),
        'due_date': $('#updateTaskThirdArea').val() // <<< ganna be fixed
      }
    }
  })
}

const getCurrentGame = function () {

}

const setCurrentGame = function () {

}
module.exports = {
  setCurrentGame,
  getCurrentGame,
  addNewTask,
  deleteTask,
  getTasks,
  showTaskDetails,
  updateTask
}
