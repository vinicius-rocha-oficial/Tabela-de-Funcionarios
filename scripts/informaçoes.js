const bodytable = document.querySelector('table tbody')


let novoarray = saveLocall();


function saveLocall() {

    let Objetos1 = localStorage.getItem('Objetos')

    Objetos1 = JSON.parse(Objetos1)

    return Objetos1 && Objetos1.length ? Objetos1 : new Array({
        name: 'Douglas',
        idade: 20,
        cpf: "123.345.567-01",
    })
}

function setAtribute() {

    localStorage.setItem('Objetos', JSON.stringify(novoarray))
}


const recebeparametro = function(objeto) {

    const putontable = `<tr>
       <td>${objeto.name}</td>
       <td>${objeto.idade}</td>
       <td>${objeto.cpf}</td>
       <td><button id="btn-excluit">X</button></td>
    </tr>
    `
    return putontable

}

const sendeInformacoes = () => {
    bodytable.innerHTML = ""
    novoarray.map(function(el, i) {
        bodytable.insertAdjacentHTML("beforeend", recebeparametro(el))
    })

    functionaddd(document.querySelectorAll('#btn-excluit'))
}

function functionaddd(btns) {

    const trs = document.querySelectorAll('table tbody tr')

    btns.forEach(function(el, i) {
        el.addEventListener('click', function() {
            const current = [...trs].indexOf(trs[i])
            console.log(current)
            novoarray.splice(current, 1)
            console.log(novoarray)
            trs[i].remove()
            setAtribute()
        })
    })
}

function lettaskfunction(arr) {

    const numero1 = arr.cpf.slice(0, 3)
    const meio = arr.cpf.slice(3, 6)
    const metade = arr.cpf.slice(6, 9)
    const fim = arr.cpf.slice(9, 11)

    const cpfdot = `${numero1}.${meio}.${metade}-${fim}`

    const arrr1 = {
        name: arr.name,
        idade: arr.idade,
        cpf: cpfdot,
    }
    return arrr1

}

function recebeinformacoes(e) {

    e.preventDefault()

    const informacoes = {}

    const inputs = document.querySelectorAll("input")

    inputs.forEach(function(el, i) {

        informacoes[el.id] = el.value
    })

    const iputsvalues = lettaskfunction(informacoes)

    novoarray.push(iputsvalues)

    sendeInformacoes()

    setAtribute()

    const childr = e.currentTarget.parentElement

    childr.parentElement.remove()

}

sendeInformacoes()