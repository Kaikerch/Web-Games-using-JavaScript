//Variáveis da vaca
let xVaca = 277
let yVaca = 368
let wVaca = 30
let hVaca = 30
let dVaca = wVaca / 2

let col = false
let pontos = 0

function mostraVaca(){
  image(ator, xVaca, yVaca, 30, 30)
}

function moveVaca(){
  
  if (keyIsDown(UP_ARROW)){
    yVaca -= 4
  }
  if (keyIsDown(DOWN_ARROW)){    
    
    if (limitey()){
      yVaca += 4
    }
    
  }
  if (keyIsDown(RIGHT_ARROW)){
    
    if (limitex1()){
      xVaca += 4
    }
  
  }
  if (keyIsDown(LEFT_ARROW)){
    
    if (limitex2()){
      xVaca -= 4
    }
    
  }

}

function colisao(){
  
  for (let x = 0; x < iCarros.length; x++){
  col = collideRectCircle (xCarros[x], yCarros[x], wCarros, hCarros, xVaca, yVaca, dVaca)
  
    if (col) {
      colidiu.play()
      posicaoinicial()
      pontos -= 1
    }
  
  }  

}

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(18)
  fill(color(255, 20, 147))
  rect(270, 10, 40, 20)
  fill(255)
  text(pontos, 290, 26)
}

function marcaponto(){
  
  if (yVaca < 15){
    ponto.play()
    pontos += 1
    posicaoinicial()
  }
  
}

function posicaoinicial(){
  yVaca = 368
}

function limitey(){
  return yVaca < 368
} 

function limitex1(){
  return xVaca < 568
}

function limitex2(){
  return xVaca > 2
}