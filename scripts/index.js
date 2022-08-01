const evento = document.querySelector("#evento")
const body = document.querySelector("body")


evento.addEventListener('click', function() {

    body.insertAdjacentHTML('beforebegin', boxmodel)

    const model = document.querySelector("#model")

    document.querySelector("#enviarform").focus()

    model.addEventListener('click', function(e) {

        removelistert(e)

    })

    const form = document.querySelector("form")
    const inputs = document.querySelectorAll("input")
    form.addEventListener('submit', function(e) {
        recebeinformacoes(e)

    })
})

function removelistert(e) {

    if (e.target.id === 'model') {
        model.remove()
    }

}