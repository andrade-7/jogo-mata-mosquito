//DECLARAÇÃO DE VARIÁVEIS
let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

let criarMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criarMosquitoTempo = 3000
}else if(nivel === 'dificil') {
    criarMosquitoTempo = 2000
}else if(nivel === 'chucknorris') {
    criarMosquitoTempo = 850
}


function ajustaTamanhoPalcoJogo(){
    altura = window.innerWidth
    largura = window.innerHeight
    
   
}

ajustaTamanhoPalcoJogo()


let cronometro = setInterval(function(){
    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'

    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //REMOVER O MOSQUITO ANTERIOR (CASO EXISTA)
    if(document.getElementById('mosquito')) 
    document.getElementById('mosquito').remove()


    // console.log(`o elemento selecionado foi : ${vidas}`)
    if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'
    }
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
    vidas ++

    let posicaoX = Math.floor(Math.random() * largura) -90
    let posicaoY = Math.floor(Math.random() * altura) -90

    posicaoY = posicaoY > largura ? 0 : posicaoY
    posicaoX = posicaoX > altura ? 0 : posicaoX
    




    //CRIAR ELEMENTO HTML
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladaAleatorio
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)


}
console.log(posicaoRandomica())
console.log(tamanhoAleatorio())

//MUDANDO O TAMANHO DOS ELEMENTOS
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0 :
            return 'mosquito1'
           
        case 1 :
            return 'mosquito2'

        case 2 :
            return 'mosquito3'    

    }


}

function ladaAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        
        case 1: 
            return 'ladoB'    
    }
}


let criarMosca = setInterval(function(){
    posicaoRandomica()
}, criarMosquitoTempo)

function iniciarJogo() {
    let nivel = document.getElementById('nivel').value

    if(nivel === '') {
        alert('Selecione um nível para começar um jogo')
        return false
    }
    
    window.location.href = "app.html?" + nivel
}

