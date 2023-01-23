//Variáveis relacionadas à bolinha
let xBola = 295
let yBola = 200
let dBola = 20
let vhBola = 10
let vvBola = 10
let raio = dBola / 2

//Variáveis relacionadas às raquetes
let xRaquete1 = 0
let yRaquete1 = 150
let wRaquete = 15
let hRaquete = 70
let xRaquete2 = 579
let yRaquete2 = 150
let vvRaquete2

let chancedeerrar = 0
let colidiu = false

//Variáveis relacionadas ao placar
let pontos1 = 0  
let pontos2 = 0

//Variáveis relacionadas aos sons do jogo
let raquetada
let ponto
let trilha

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}
  
function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

//Função principal onde o jogo vai rodar
function draw() {
  background(0)
  mostraBola()
  moveBola()
  verificaBola()
  mostraRaquete(xRaquete1, yRaquete1)
  mostraRaquete(xRaquete2, yRaquete2)
  moveRaquete1()
  moveRaquete2()
  //colisaoRaquetess()
  colisaoRaquetes(xRaquete1, yRaquete1)
  colisaoRaquetes(xRaquete2, yRaquete2)
  placar()
  marcaponto()
}

function mostraBola(){
  circle(xBola,yBola,dBola)
}

function moveBola(){
  xBola += vhBola
  yBola += vvBola
}

function verificaBola(){
   
  if (xBola + raio >= width || xBola - raio <= 0) {
    vhBola *= -1
  }
  if (yBola + raio >= height || yBola - raio <= 0) {
    vvBola *= -1
  }

}

function mostraRaquete(x, y){
  rect(x, y, wRaquete, hRaquete)
}

function moveRaquete1(){
  
  if (keyIsDown(UP_ARROW)){
    yRaquete1 -= 10
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete1 += 10
  }

}

function moveRaquete2(){
  vvRaquete2 = yBola - yRaquete2 - wRaquete / 2 - 30
  yRaquete2 += vvRaquete2 + chancedeerrar
  calculachancedeerrar()
}

function colisaoRaquetess(x, y){
  
  if (xBola - raio <= x + wRaquete && yBola - raio <= y + hRaquete && yBola + raio >= y){
    vhBola *= -1
  }

}

function colisaoRaquetes(x, y){
  colidiu = collideRectCircle (x, y, wRaquete, hRaquete, xBola, yBola, raio)
  
  if (colidiu ) {
    raquetada.play()
    vhBola *= -1
  }
}

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(18)
  fill(color(255, 20, 147))
  rect(130, 10, 40, 20)
  rect(430, 10, 40, 20)
  fill(255)
  text(pontos1, 150, 26)
  text(pontos2, 450, 26)
}

function marcaponto(){
  
  if (xBola > 590){
    ponto.play()
    pontos1 += 1
    }   
  
  if (xBola < 10){
      ponto.play()
      pontos2 += 1
    }
}

function calculachancedeerrar() {
  
  if (pontos2 >= pontos1) {
    chancedeerrar += 1
    
    if (chancedeerrar >= 39){
    chancedeerrar = 40
    }
 
  } else {
    chancedeerrar -= 1
    
    if (chancedeerrar <= 35){
    chancedeerrar = 35
    }
  
  }

}