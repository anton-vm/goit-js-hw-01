const validation = document.querySelector("#validation-input")



validation.onblur = function check () {

    if (validation.value.length === 6) {
        validation.classList.add('valid')
    } else {
        validation.classList.add('invalid')
    }
}

