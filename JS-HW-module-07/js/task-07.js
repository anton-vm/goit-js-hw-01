const range = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

function change () {

    let num = range.value
    text.style.fontSize = `${num}px`
}


range.addEventListener('input', change)

