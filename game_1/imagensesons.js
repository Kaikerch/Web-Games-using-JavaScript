//Imagens
let estrada
let carro1
let carro2
let carro3
let ator

//Sons
let trilha
let colidiu
let ponto

function preload(){
  estrada = loadImage("Imagens/estrada.png")
  carro1 = loadImage("Imagens/carro-1.png")
  carro2 = loadImage("Imagens/carro-2.png")
  carro3 = loadImage("Imagens/carro-3.png")
  ator = loadImage("Imagens/ator-1.png")
  
  iCarros = [carro1, carro2, carro3, carro1, carro2, carro3]
  
  trilha = loadSound("sons/trilha.mp3")
  ponto = loadSound("sons/pontos.wav")
  colidiu = loadSound("sons/colidiu.mp3")
}