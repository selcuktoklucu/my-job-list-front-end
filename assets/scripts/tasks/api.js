
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

const showTaskDetails = id => {
  return $.ajax({
    url: config.apiUrl + `/tasks/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addNewTask = data => {
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

const deleteTask = id => {
  return $.ajax({
    url: config.apiUrl + `/tasks/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTask = id => {
  // console.log('tasks/UI.js update task')
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
module.exports = {
  addNewTask,
  deleteTask,
  getTasks,
  showTaskDetails,
  updateTask
}
