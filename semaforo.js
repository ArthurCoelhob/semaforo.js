const img = document.getElementById('img') // buscando o id img
const buttons = document.getElementById('buttons') // buscando o id buttons
let coresIndex = 0 // para sempre quando for ter alguma mudança de cor, começar do indice 0 = vermelho
let intervalId = null

function traficoLuz(event) {
    pararIntervalo()
    luzOn[event.target.id]() // vai buscar o evento alvo que esta acontencendo

}

const novoIndex = () => {
    if (coresIndex < 2) {
        coresIndex++ // se coresIndex for menor que dois, ira incrementar e mudar a cor
    } else coresIndex = 0
        // se não, recomeçar o processo
}
const mudandoCor = () => {
    const cores = ['red', 'yellow', 'green']
    const cor = cores[coresIndex]
    luzOn[cor]()
    novoIndex()
}

const pararIntervalo = () => {
    clearInterval(intervalId) // para não ocorrer um loop e o usuario ficar clicando e bug a api
}
const luzOn = {
    'red': () => img.src = 'vermelho.png',
    'yellow': () => img.src = 'amarelo.png',
    'green': () => img.src = 'verde.png',
    'automatic': () => intervalId = setInterval(mudandoCor, 1000) // quando acionado o automatico, ira buscar uma função que possui um intervalo de 1 seg para acontecer
}

buttons.addEventListener('click', traficoLuz) // quando houver um click ira acionara função