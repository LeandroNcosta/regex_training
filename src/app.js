const form = document.querySelector('form')
const inputUserName = document.querySelector('#username')
const button = document.querySelector('.button')
const pUsernameFeedback = document.createElement('p')
const pSubmitFeedback = document.createElement('p')
pSubmitFeedback.setAttribute('data-feedback', 'feedback-submit')

const invalidUserNameInfo = {
  paragraph: pUsernameFeedback,
  text: 'O valor deve conter no mínimo 6-15 caracteres, incluindo números',
  className: 'username-help-feedback',
  previousSibling: inputUserName
}

const validUserNameInfo = {
  paragraph: pUsernameFeedback,
  text: 'username válido =)',
  className: 'username-success-feedback',
  previousSibling: inputUserName
}

const invalidSubmitInfo = {
  paragraph: pSubmitFeedback,
  text: 'Por favor, insira um username válido',
  className: 'submit-help-feedback',
  previousSibling: button
}

const validSubmitInfo = {
  paragraph: pSubmitFeedback,
  text: 'Dados enviados =)',
  className: 'submit-success-feedback',
  previousSibling: button
}

const testeUserName = inputValue => /^(?=.*\d)[0-9a-zA-Z]{6,15}$/
  .test(inputValue)

const insertParagraphInDOM = (paragraphInfo) => {
  const { paragraph, text, className, previousSibling } = paragraphInfo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
  previousSibling.insertAdjacentElement('afterend', paragraph)
}

const removeSubmitParagraph = () => {
  const paragraphSubmitExists = document.querySelector('[data-feedback="feedback-submit"]')

  if (paragraphSubmitExists) {
    pSubmitFeedback.remove()
  }
}

const showUserNameInfo = event => {
  const inputValue = event.target.value
  const isMatch = testeUserName(inputValue)
  console.log(isMatch)

  removeSubmitParagraph()

  if (!isMatch) {
    insertParagraphInDOM(invalidUserNameInfo)
    return
  }
  insertParagraphInDOM(validUserNameInfo)

}
const showSubmitInfo = event => {
  event.preventDefault()
  const isMatch = testeUserName(inputUserName.value)

  if (!isMatch) {
    insertParagraphInDOM(invalidSubmitInfo)
    return
  }
  insertParagraphInDOM(validSubmitInfo)
}


inputUserName.addEventListener('input', showUserNameInfo)
form.addEventListener('submit', showSubmitInfo)
