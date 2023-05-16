var setaesquerda = document.getElementById("seta-esquerda")
var leonardo = document.getElementById("leonardo")
var samanta = document.getElementById("samanta")
var bruna = document.getElementById("bruna")
var setadireita = document.getElementById("seta-direita")

function rolardireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-left: 32px; margin-top: 116px"
   
    
}

function rolaresquerda(){
    bruna.style = "display: none"
    leonardo.style = "display: flex"
    setadireita.style = "display: flex; margin-left: 32px; margin-top: 116px"
    setaesquerda.style = "display: none"
}