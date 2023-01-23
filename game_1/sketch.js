function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(estrada);
  mostraVaca()
  mostraCarros()
  moveCarros()
  moveVaca()
  voltaCarros()
  colisao()
  placar()
  marcaponto()
}
