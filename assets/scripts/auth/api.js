
const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    // data: data >>Works as well
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // data: data >>Works as well
    data
  })
}

const signOut = function () {
  // we dont pass and parameters so no dateformat
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // we are deleting the token on api to sign out. thats why it has delete tag
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // data: data >>Works as well
    data
  })
}

const getCurrentGame = function () {

}

const setCurrentGame = function () {

}
module.exports = {
  setCurrentGame,
  getCurrentGame,
  signUp,
  signIn,
  changePassword,
  signOut
}
