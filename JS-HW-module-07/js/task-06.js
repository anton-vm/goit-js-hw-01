const validation = document.querySelector("#validation-input")
const length = document.querySelector("input")

console.log(length.dataset);

validation.onblur = function check () {

    if (validation.value.length >= 6) {
        validation.classList.add('valid')
    } else {
        validation.classList.add('invalid')
    }
}

validation.onfocus = function  () {
        validation.classList.remove('valid')
        validation.classList.remove('invalid')
        validation.innerHTML = ''
  
}