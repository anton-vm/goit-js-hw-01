const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')


function addName () {
nameOutput.textContent = nameInput.value
}

nameInput.addEventListener('input', addName)

nameInput