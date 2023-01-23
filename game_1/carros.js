//Variáveis dos carros
let xCarros = [605, -8, 605, 605, -8, 605]
let yCarros = [95, 150, 320, 210, 40, 263]
let vCarros = [6, 2, 4, 5, 3, 7]
let wCarros = 50
let hCarros = 40

function mostraCarros(){
  
  for (let x = 0; x < iCarros.length; x++){
    image(iCarros[x], xCarros[x], yCarros[x], wCarros, hCarros)
  }

}

function moveCarros(){
  xCarros[0] -= vCarros[0]
  xCarros[1] += vCarros[1]
  xCarros[2] -= vCarros[2]
  xCarros[3] -= vCarros[3]
  xCarros[4] += vCarros[4]
  xCarros[5] -= vCarros[5]
}

function voltaCarros(){
  
  if (xCarros[0] < -50){
      xCarros[0] = 605
  }
  if (xCarros[1] > 610){
      xCarros[1] = -8
  }
  if (xCarros[2] < -50){
      xCarros[2] = 605
  }
  if (xCarros[3] < -50){
      xCarros[3] = 605
  }
  if (xCarros[4] > 610){
      xCarros[4] = -8
  }
  if (xCarros[5] < -50){
      xCarros[5] = 605
  }

}