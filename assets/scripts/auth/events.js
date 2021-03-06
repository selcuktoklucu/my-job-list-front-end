// All clicks will be here to handle front end
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

let a = 1
const toggleSignUpIn = () => {
  if (a % 2 === 1) {
    $('#formSignUp').show(500)
    $('#formSignIn').hide(500)
    $('#modelTitle').text('Sign Up!')
    $('#btnShowSignUpIn').text('You already have Account?')
  } else {
    $('#formSignUp').hide(500)
    $('#formSignIn').show(500)
    $('#modelTitle').text('Sign In!')
    $('#btnShowSignUpIn').text('Looking to Sign up?')
  }
  a++
}

const addHandlers = function () {
  // console.log('I am at events.js!, jquery passed me from app js')
  // $('.box').on('click', onClickBox)
  $('#formSignUp').on('submit', onSignUp)
  $('#formSignIn').on('submit', onSignIn)
  $('#form-change-password').on('submit', onChangePassword)
  $('#formSignOut').on('submit', onSignOut)
  $('#btnShowSignUpIn').on('click', toggleSignUpIn)
}
module.exports = {
  addHandlers

}
